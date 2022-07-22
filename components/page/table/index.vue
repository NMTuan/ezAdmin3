<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 15:50:05
 * @LastEditTime: 2022-07-20 16:22:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\table\index.vue
-->
<template>
    <LayoutContainer>
        {{ loading }}
        <PageTableActions :actions="props.actions" />
        <NuxtPage />
        <MyTable :fields="props.fields" :data="tableData" />
        <div class="flex items-center pt-4" v-if="fetchApi">
            <PageTablePagination v-model:page="currentPage" v-model:limit="limit" :count="totalCount" />
        </div>
    </LayoutContainer>
</template>
<script setup>
const route = useRoute()
const props = defineProps({
    fields: {   // 表头(列字段)
        type: Array,
        default: () => []
    },
    data: { // 数据
        type: Array,
        default: () => []
    },
    actions: {  // 操作按钮
        type: Array,
        default: () => []
    },
    fetchApi: { // 异步数据接口
        type: Function,
        default: undefined
    },
    query: {
        type: Object,
        default: () => ({})
    }
})
const tableData = ref([])   // 表格数据
const loading = ref(false)  // 加载状态
const totalCount = ref(0)    // 总条数

const currentPage = ref(1)
const limit = ref(10)

// 如果reload=true, 则重载数据
watch(() => route.params.reload, (val) => {
    if (val) {
        fetchData()
    }
})

// 条数改变时, 需要重新查询
watch(limit, () => {
    if (currentPage.value === 1) {
        // 如果已经是第一页, 则获取异步数据
        fetchData()
    } else {
        // 如果不是第一页, 则改变页面, 触发currentPage的watch去获取异步数据
        currentPage.value = 1
    }
})

// 当前页改变时, 重新查询
watch(currentPage, () => {
    fetchData()
})

// 异步获取数据
const fetchData = async () => {
    if (loading.value) {
        return
    }
    loading.value = true
    const res = await props.fetchApi({
        page: currentPage.value,
        limit: limit.value
    })
    loading.value = false
    if (unref(res.error)) {
        return
    }
    tableData.value = unref(res.data).data
    // console.log(JSON.stringify(unref(res.data).data, null, 2))
    totalCount.value = unref(res.data).meta.total_count
}

// 如果没有异步接口, 则渲染data数据
if (typeof props.fetchApi === 'undefined') {
    tableData.value = props.data
} else {
    fetchData()
}

</script>
