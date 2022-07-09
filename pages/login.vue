<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:10:21
 * @LastEditTime: 2022-07-09 15:44:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\login.vue
-->
<template>
  <div class="flex flex-col px-4 items-center justify-center h-full overflow-hidden bg-no-repeat bg-center bg-cover"
    :style="{ backgroundImage }">
    <h1 class="text-neutral-800 font-normal text-3xl mb-8">
      {{ config.public.siteName }}
    </h1>
    <div class="mb-32 w-full sm:w-96 sm:mx-0">
      <div>
        <input class="block w-full bg-white border border-neutral-200 rounded mb-6 p-4 text-base leading-none outline-none transition-all 
        hover:border-sky-500 focus:border-sky-500 focus:shadow
        " type="text" placeholder="邮箱" v-model="email" />
      </div>
      <div>
        <input class="block w-full bg-white border border-neutral-200 rounded mb-6 p-4 text-base leading-none outline-none transition-all 
        hover:border-sky-500 focus:border-sky-500 focus:shadow
        " type="password" placeholder="密码" v-model="password" />
      </div>
      <div>
        <MyButton class="block w-full bg-sky-500 border border-sky-400 rounded p-4 leading text-white text-base leading-none cursor-pointer outline-none transition-all
        hover:op-85 focus:shadow
        " @click="submit">
          登录
        </MyButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import trianglify from '@victorioberra/trianglify-browser'

const config = useRuntimeConfig()
const auth = useAuth()

const email = ref('test@test.com') //
const password = ref('QWE123!@#')  //

// 背景图
const x = 50
const pattern = trianglify({
  cellSize: Math.random() * x + x,
  width: 1920,
  height: 1080,
  variance: 50,
  xColors: ['#fafafa', '#f5f5f5', '#e5e5e5'],
  yColors: ['#fafafa', '#f5f5f5', '#e5e5e5'],
  seed: null
}).toCanvas()
const triangle = pattern.toDataURL('image/png')
const backgroundImage = `url('${triangle}')`

// 表单提交
const submit = () => {
  // 登录，拿token，存token
  auth.login({
    email: email.value,
    password: password.value
  })
    .then(() => {
      return auth.getMe()
    })
    .then(() => {
      alert('登录成功')
      navigateTo({ name: 'index' })
    })
}
</script>
