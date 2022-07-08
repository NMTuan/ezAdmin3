<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:07:40
 * @LastEditTime: 2022-07-05 19:49:41
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\index.vue
-->
<template>
  <div>
    <div class="text-center bg-red-400 py-10">index</div>
    <pre>{{ auth.isLogged }}</pre>
    <button @click="logout">登出</button>
  </div>
</template>
<script setup>
const auth = useAuth()
const logout = () => {
  auth.logout()
}
</script>
<script>
export default {
  page: {
    name: '首页',
    sort: 100
  }
}

</script>
