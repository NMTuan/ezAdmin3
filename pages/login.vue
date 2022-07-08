<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:10:21
 * @LastEditTime: 2022-07-08 17:53:03
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\login.vue
-->
<template>
  <div class="flex flex-col items-center justify-center h-full overflow-hidden bg-no-repeat bg-center bg-cover"
    :style="{ backgroundImage }">
    <h1 class="text-sky-900 font-normal text-2xl">
      {{ config.public.siteName }}
    </h1>
    <div class="bg-white w-96 p-6 mb-32 rounded shadow">
      <div>

        <MyInput :class="['border-red-400', 'h-32']" />
        <MyInput :class="{ 'w-32': true, 'h-32': true }" />
      </div>
      <div>
        <input class=" bg-primary" type="text" v-model="email" />
      </div>
      <div>
        <input class=" bg-sky-400 text-lg" type="text" v-model="password" />
      </div>
      <div>
        <MyButton type="secondary" size="xs" @click="submit">登录</MyButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import trianglify from '@victorioberra/trianglify-browser'

const config = useRuntimeConfig()
const auth = useAuth()

const email = ref('') //test@test.com
const password = ref('')  //QWE123!@#

// 背景图
const x = 50
const pattern = trianglify({
  cellSize: Math.random() * x + x,
  width: 1920,
  height: 1080,
  variance: 0.75,
  xColors: ['#f0f9ff', '#38bdf8', '#0284c7'],
  yColors: ['#f0f9ff', '#38bdf8', '#0284c7'],
  // yColors: ['#EFF6FF', '#60A5FA', '#2563EB'],
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
