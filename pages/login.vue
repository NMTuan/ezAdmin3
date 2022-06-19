<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:10:21
 * @LastEditTime: 2022-06-19 20:56:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\login.vue
-->
<template>
  <div>
    <h1>login page</h1>
    <div>
      邮箱<input type="text" v-model="email">
    </div>
    <div>
      密码<input type="text" v-model="password">
    </div>
    <div>
      <button @click="submit">登录</button>
      <button @click="userInfo">获取用户信息</button>
    </div>
    <div>{{ email }}</div>
    <div>{{ password }}</div>
  </div>
</template>

<script setup>
const api = useApi()
const auth = useAuth()

const email = ref('test@test.com')
const password = ref('QWE123!@#')

const submit = async () => {
  console.log(email.value, password.value)
  // 登录，拿token，存token
  const authRes = await api.auth.singIn({
    email: email.value,
    password: password.value
  })
  if (!authRes.data.value?.token) {
    // 登录失败
    return
  }
  localStorage.setItem('token', authRes.data.value.token)
  auth.token = authRes.data.value.token

  // 拿userInfo，正常则进入
  const userRes = await api.auth.userInfo({
    project_id: 'p_hu46xavt6mza8i'
  })
  console.log('userRes', userRes.data.value)
}

const userInfo = () => {
  api.auth.userInfo({})
    .then(({ data }) => {
      console.log('res', data)
    })
}
</script>
