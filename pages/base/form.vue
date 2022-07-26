<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 09:36:18
 * @LastEditTime: 2022-07-26 10:41:50
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\form.vue
-->
<template>
    <LayoutContainer class="flex">
        <MyForm v-model:formData="formData" :fields="fields" />
        <div>
            组件外改变值, 要更新到组件内.
            <MyInput v-model="formData.username" />
            <pre>[formData]: {{ formData }}</pre>
        </div>
        <div>
            <pre>{{ fields }}</pre>
        </div>

    </LayoutContainer>
</template>
<script setup lang="ts">
const formData = ref({})
const fields = [
    { label: '用户名', field: 'username' },
    { label: '昵称', field: 'nickname' },
    { label: '所在组', field: 'groupName', type: 'select' },
    {
        label: '状态', field: 'state', type: 'select',
        options: [
            { label: '男', value: 1 },
            { label: '女', value: 2 },
            { label: '未知', value: 0 },
        ]
    },
]
</script>
<script lang="ts">
export default {
    page: {
        name: 'MyForm'
    }
}
</script>
