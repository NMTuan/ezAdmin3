<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:10:21
 * @LastEditTime: 2022-07-04 20:59:05
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\login.vue
-->
<template>
  <div>
    <h1>login page</h1>
    <div>邮箱<input type="text" v-model="email" /></div>
    <div>密码<input type="text" v-model="password" /></div>
    <div>
      <button @click="submit">登录</button>
      <button @click="userInfo">获取用户信息</button>
    </div>
    <div>{{ email }}</div>
    <div>{{ password }}</div>
  </div>
</template>

<script setup>

const auth = useAuth();

const email = ref("test@test.com");
const password = ref("QWE123!@#");
let data = ref({})

const submit = async () => {
  // 登录，拿token，存token
  auth.login({
    email: email.value,
    password: password.value,
  })
    .then(() => {
      return auth.getMe()
    })
    .then(() => {
      alert('登录成功')
      navigateTo({ name: 'index' })
    })

};

</script>
