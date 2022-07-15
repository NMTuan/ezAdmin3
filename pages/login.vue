<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:10:21
 * @LastEditTime: 2022-07-15 14:51:06
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\login.vue
-->
<template>
  <div class="flex flex-col px-4 items-center justify-center h-full overflow-hidden bg-no-repeat bg-center bg-cover"
    :style="{ backgroundImage }">
    <h1 class="text-neutral-800 font-normal text-2xl mb-8">
      {{ config.public.siteName }}
    </h1>
    <div class="mb-32 w-full sm:w-96 sm:mx-0">
      <!-- <div>
        <input class="block w-full bg-white border border-neutral-200 rounded mb-6 p-4 text-base leading-none outline-none transition-all 
        hover:border-sky-500 focus:border-sky-500 focus:shadow
        " type="text" placeholder="邮箱" v-model="email" />
      </div>
      <div>
        <input class="block w-full bg-white border border-neutral-200 rounded mb-6 p-4 text-base leading-none outline-none transition-all 
        hover:border-sky-500 focus:border-sky-500 focus:shadow
        " type="password" placeholder="密码" v-model="password" />
      </div> -->
      <div class="mb-4">
        <MyInput size="lg" placeholder="email" v-model="email" />
      </div>
      <div class="mb-4">
        <MyInput type="password" size="lg" placeholder="password" v-model="password" />
      </div>
      <div class="mb-4">
        <!-- <MyButton class="block w-full bg-sky-500 border border-sky-400 rounded p-4 leading text-white text-base leading-none cursor-pointer outline-none transition-all
        hover:op-85 focus:shadow
        " @click="submit">
          登录
        </MyButton> -->
        <MyButton type="primary" size="lg" class="w-full" @click="submit">
          登录
        </MyButton>
      </div>
      <div class="text-center" v-if="config.public.demo">
        <a href="https://github.com/nmtuan/ezAdmin3" target="_blank">
          <img alt="GitHub last commit"
            src="https://img.shields.io/github/last-commit/nmtuan/ezadmin3?logo=github&style=flat-square">
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'page'
})

const config = useRuntimeConfig()
const auth = useAuth()
const backgroundImage = useBackgroundImage()

const email = ref(config.public.demoMail) //
const password = ref(config.public.demoPassword)  //

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
