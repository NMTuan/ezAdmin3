<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-19 10:49:52
 * @LastEditTime: 2022-07-19 16:18:31
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\table\pagination.vue
-->
<template>
    <div>
        <div class="flex items-center">
            <div v-for="item in Math.ceil(count / limit)">
                <div v-if="item === page" class="px-3 py-2 bg-sky-500 text-white">
                    {{ item }}
                </div>
                <div v-else class="px-3 py-2 cursor-pointer
                hover:bg-neutral-100
                " @click="clickPage(item)">
                    {{ item }}
                </div>
            </div>

            <!-- <div class="w-12 text-center">
                <MyInput clearStyle v-model.number='page' />
                <MyInput clearStyle :value.number='page' @change="changeInput" />
                {{ page }}
            </div> -->
            <div>
                <select :value="limit" @change="changeLimit">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    page: { // 当前页
        type: Number,
        default: 1
    },
    limit: {    // 每页条数
        type: Number,
        default: 5
    },
    count: {    // 总条数
        type: Number,
        default: 0
    }
})

const emits = defineEmits([
    'update:page',
    'update:limit'
])

const clickPage = (page) => {
    emits('update:page', parseInt(page))
}

const changeInput = (e) => {
    emits('update:page', parseInt(e.target.value))
}

const changeLimit = (e) => {
    emits('update:limit', parseInt(e.target.value))
}

</script>
