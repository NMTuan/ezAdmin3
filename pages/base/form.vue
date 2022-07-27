<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 09:36:18
 * @LastEditTime: 2022-07-27 11:48:32
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\form.vue
-->
<template>
    <LayoutContainer class="flex">
        <MyForm ref="formEl" v-model:formData="formData" :fields="fields" />
        <MyButton @click="submit">提交</MyButton>
        <div>
            组件外改变值, 要更新到组件内.
            <!-- <MyInput v-model="formData.username" /> -->
            <pre>[formData]: {{ formData }}</pre>
        </div>

    </LayoutContainer>
</template>
<script setup lang="ts">
const formData = ref({
    // username: "张三"
})
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
    { label: '所在组', field: 'groupName', type: 'select' },
    {
        label: '状态', field: 'state', type: 'select',
        options: [
            { label: '男', value: 1 },
            { label: '女', value: 2 },
            { label: '未知', value: 0 },
        ],
        rules: [
            {
                required: true,
                message: '必选',
            },
            {
                validator(rule, value, callback) {
                    if (value === 0) {
                        callback(new Error('不能选择此项'))
                    } else {
                        callback()
                    }
                },
                trigger: 'change'
            }]
    },
]

const formEl = ref(null)

const submit = () => {
    formEl.value.validate((error, fields) => {
        if (error) {
            return
        }
        console.log('submit')
    })
}
</script>
<script lang="ts">
export default {
    page: {
        name: 'MyForm'
    }
}
</script>
