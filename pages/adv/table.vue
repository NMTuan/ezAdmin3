<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 15:50:05
 * @LastEditTime: 2022-07-20 17:24:05
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table.vue
-->
<template>
    <PageTable :fields="fields" :actions="actions" :fetchApi="fetchApi" />
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
    { label: 'create', toName: 'adv-table-create' },
    { label: 'edit' },
    { label: 'delete' }
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
