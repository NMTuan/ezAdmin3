<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 16:15:35
 * @LastEditTime: 2022-08-02 15:48:57
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table\create\index.vue
-->
<template>
    <PageForm :title="title" v-model="formData" :fields="fields" :actions="actions" :submitApi="submitApi">
    </PageForm>
</template>
<script setup>
const api = useApi()
const title = 'Create Item'
const formData = ref({})
const fields = [
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
        fetchOptions: async () => {
            const res = await api.office.fetch()
            if (unref(res.error) !== null) {
                return []
            }
            return unref(res.data).data.reduce((total, item) => {
                total.push({
                    label: item.name,
                    value: item.name
                })
                return total
            }, [])
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
const submitApi = api.table.create
</script>
<script>
export default {
    page: {
        name: 'Create'
    }
}
</script>
