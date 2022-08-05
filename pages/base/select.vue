<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-21 11:57:33
 * @LastEditTime: 2022-08-05 17:49:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\select.vue
-->
<template>
    <LayoutContainer>
        <div>
            selected: {{ selected }}
            <input type="text" v-model.number="selected">
        </div>
        <div class="flex">
            <MyInput size='xs' v-model="inputValue" />
            <MySelect size="xs" :options='options' v-model='selected' />
        </div>
        <div class="flex">
            <MyInput size='sm' v-model="inputValue" />
            <MySelect size="sm" :options='options' v-model='selected' />
        </div>
        <div class="flex">
            <MyInput size='md' v-model="inputValue" />
            <MySelect size="md" :options='options' v-model='selected' />
        </div>
        <div class="flex">
            <MyInput size='lg' v-model="inputValue" />
            <MySelect size="lg" :options='options' v-model='selected' />
        </div>
        <div class="flex">
            <MyInput size='xs' v-model="inputValue" />
            <MySelect size="xs" :options='options' v-model='multipleSelected' multiple />
        </div>
        <div class="flex">
            <MyInput size='sm' v-model="inputValue" />
            <MySelect size="sm" :options='options' v-model='multipleSelected' multiple />
        </div>
        <div class="flex">
            <MyInput size='md' v-model="inputValue" />
            <MySelect size="md" :options='options' v-model='multipleSelected' multiple />
        </div>
        <div class="flex">
            <MyInput size='lg' v-model="inputValue" />
            <MySelect size="lg" :options='options' v-model='multipleSelected' multiple />
        </div>
        <div>
            <MySelect :fetchOptions="fetchOptions" :handleFetchOptionsRes="handleFetchOptionsRes" v-model="office">

            </MySelect>
        </div>
        {{ multipleSelected }}
        {{ office }}

    </LayoutContainer>
</template>
<script setup>
const api = useApi()
const inputValue = ref('测试内容啊')
const selected = ref(2)
const multipleSelected = ref([1, 2, 0])
const options = ref([
    { label: '男', value: 1 },
    { label: '女', value: 2 },
    { label: '未知', value: 0 },
])
const office = ref('')
const fetchOptions = api.office.fetch
const handleFetchOptionsRes = (item) => {
    return {
        label: item.name,
        value: item.name
    }
}
// const fetchOptions = async () => {
//     const res = await api.office.fetch()
//     if (unref(res.error) !== null) {
//         return []
//     }
//     return unref(res.data).data.reduce((total, item) => {
//         total.push({
//             label: item.name,
//             value: item.name
//         })
//         return total
//     }, [])
// }
</script>
<script>
export default {
    page: {
        name: 'MySelect'
    }
}
</script>
