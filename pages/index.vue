<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:07:40
 * @LastEditTime: 2022-07-04 17:21:31
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\index.vue
-->
<template>
  <div>
    <div class="text-center bg-red-400 py-10">index</div>
    <NuxtLink :to="{ name: 'login' }">[login]</NuxtLink>
    <NuxtLink :to="{ name: 'aa' }">[aa]</NuxtLink>
    <pre>{{ auth.isLogged }}</pre>
    <pre>{{ auth.me }}</pre>
    <button @click="func">test</button>
  </div>
</template>
<script setup>
</script>
