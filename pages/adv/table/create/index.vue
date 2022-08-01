<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 16:15:35
 * @LastEditTime: 2022-08-01 17:53:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table\create\index.vue
-->
<template>
    <div>
        <PageForm :title="title" v-model="formData" :fields="fields" :actions="actions">
        </PageForm>
        <pre>formData: {{ formData }}</pre>
    </div>
</template>
<script setup>
const title = 'Create Item'
const formData = ref({})
const fields = [
    {
        label: '用户名', field: 'username',
        rules: [
            {
                required: true,
                message: '必填',
            },
            {
                validator(rule, value, callback) {
                    if (value.length < 5) {
                        callback(new Error('需大于4个字'))
                    } else {
                        callback()
                    }
                },
            }
        ]
    },
    { label: '昵称', field: 'nickname' },
]
const actions = [
    {
        label: '提交',
        action: 'submit'
    },
    {
        label: '取消', handleClick() {
            console.log('cancel')
        }
    }
]
</script>
<script>
export default {
    page: {
        name: 'Create'
    }
}
</script>
