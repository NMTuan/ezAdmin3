<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 16:15:35
 * @LastEditTime: 2022-08-02 11:56:21
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table\create\index.vue
-->
<template>
    <div>
        <PageForm :title="title" v-model="formData" :fields="fields" :actions="actions" :submitApi="submitApi">
        </PageForm>
        <pre>formData: {{ formData }}</pre>
    </div>
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
        type: 'select',
        rules: [{ required: false, message: 'required' }]
    },
    {
        label: 'Office', field: 'office',
        rules: [{ required: true, message: 'required' }]
    },
    {
        label: 'Age', field: 'age',
        rules: [{ required: true, message: 'required' }]
    },
    {
        label: 'Salary', field: 'salary',
        rules: [{ required: true, message: 'required' }]
    },

    // {
    //     label: '用户名', field: 'username',
    //     rules: [
    //         {
    //             required: true,
    //             message: '必填',
    //         },
    //         {
    //             validator(rule, value, callback) {
    //                 if (value.length < 5) {
    //                     callback(new Error('需大于4个字'))
    //                 } else {
    //                     callback()
    //                 }
    //             },
    //         }
    //     ]
    // },
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
