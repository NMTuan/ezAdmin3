<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:07:40
 * @LastEditTime: 2022-07-10 21:16:11
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\index.vue
-->
<template>
  <div class="flex-1 mx-4 mb-4 border border-neutral-200/50 bg-white">
    main
    <pre>{{ auth.isLogged }}</pre>
    <button @click="logout">登出</button>
    <div class="w-96 mx-auto p-5 bg-white border border-neutral-200">123</div>
    <p v-for="i in 20">{{ i }}</p>
    <div class=" bg-sky-400 text-center p-8">
      <div class="mx-auto inline-block text-5xl text-white i-ri-account-box-line"></div>
      <div class="mx-auto text-5xl i-ri-aliens-fill"></div>
      <div class="mx-auto i-ri-aliens-fill"></div>
    </div>
    <div class="w-96 mx-auto p-5  border border-neutral-200">123</div>
    <div class=" text-center p-8">
      123123123
    </div>

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
    icon: 'i-ri-home-3-fill',
    sort: 100
  }
}

</script>
