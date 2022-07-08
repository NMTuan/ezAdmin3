<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-06 10:46:22
 * @LastEditTime: 2022-07-06 15:05:31
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\admin.vue
-->
<template>
    <div>
        <div>admin page</div>
        <button v-check="'admin-create'" @click="add">添加管理员</button>
        <NuxtPage />
    </div>
</template>
<script setup>
// const router = useRouter()
const add = () => {
    navigateTo({ name: 'admin-create' })
}
</script>
<script>
export default {
    page: {
        name: '管理员'
    }
}
</script>
