<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:07:40
 * @LastEditTime: 2022-06-17 17:25:29
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\index.vue
-->
<template>
  <div>
    <div class="text-center bg-red-400 py-10">index</div>
    <NuxtLink :to="{ name: 'login' }">[login]</NuxtLink>
    <div>{{ auth }}</div>
  </div>
</template>
<script setup>
const auth = useAuth();
</script>
