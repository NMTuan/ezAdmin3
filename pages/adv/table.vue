<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 15:50:05
 * @LastEditTime: 2022-07-19 14:20:26
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table.vue
-->
<template>
    <LayoutContainer>
        <PageTable :fields="fields" :actions="actions" :fetchApi="fetchApi" />
    </LayoutContainer>
</template>
<script setup>
const fix = useFix()
const api = useApi()

const fields = [
    { label: 'Id', field: 'id' },
    { label: 'Name', field: 'name' },
    { label: 'Position', field: 'position' },
    { label: 'Office', field: 'office' },
    { label: 'Age', field: 'age' },
    { label: 'Salary', field: 'salary' },
    { label: 'CreatedAt', field: 'date_created' },
]

const actions = [
    { label: '创建', toName: 'adv-table-create' },
    { label: '编辑' },
    { label: '删除' }
]

const fetchApi = api.table.fetch


</script>
<script>
export default {
    page: {
        name: "PageTabe"
    }
}
</script>
