<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:07:40
 * @LastEditTime: 2022-07-04 17:19:28
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
const auth = useAuth()




// const url = 'http://192.168.192.110:8081/api/v1/db/auth/user/me'
// const url = '/api/users/me'
const url = 'http://192.168.192.110:8055/collections'

const func = async () => {
  // const { data, pending, error } = await useAsyncData('x', () => {
  //   return $fetch(url)
  // }, {
  //   initialCache: false
  // })
  auth.getMe()
    .then(({ data, pending, error }) => {
      console.log('pending', pending.value)
      console.log('error', error.value)
      console.log('data', JSON.stringify(data.value, null, 2))

    })
    .catch(error => {
    })
}

func()

</script>
