<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 16:15:35
 * @LastEditTime: 2022-08-08 16:43:27
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table\edit\[id].vue
-->
<template>
    <PageForm :title="title" v-model="formData" :fields="fields" :actions="actions" :submitApi="submitApi"
        :fetchApi="fetchApi" :fetchPayload="fetchPayload">
    </PageForm>
</template>
<script setup>
const api = useApi()
const route = useRoute()
const title = 'Create Item'
const formData = ref({})
const fields = [
    {
        label: 'Id', field: 'id',
        disabled: true,
        hidden: true,
        rules: [{ required: true, message: 'required' }]
    },
    {
        label: 'Name', field: 'name',
        rules: [{ required: true, message: 'required' }]
    },
    {
        label: 'Position', field: 'position',
        rules: [{ required: false, message: 'required' }]
    },
    {
        label: 'Office', field: 'office',
        type: 'select',
        fetchOptions: api.office.fetch,
        handleFetchOptionsRes: (item) => {
            return {
                label: item.name,
                value: item.name
            }
        },
        rules: [{ required: true, message: 'required' }]
    },
    {
        label: 'Age', field: 'age',
        rules: [{ required: true, message: 'required' }]
    },
    {
        label: 'Salary', field: 'salary',
        rules: [{ required: true, message: 'required' }]
    }
]
const actions = [
    {
        label: '提交',
        action: 'submit'
    },
    {
        label: '取消',
        action: 'cancel'
    }
]
const submitApi = api.table.updateItem
const fetchApi = api.table.fetchItem
const fetchPayload = () => {
    return {
        id: route.params.id
    }
}

</script>
<script>
export default {
    page: {
        name: 'Edit'
    }
}
</script>
