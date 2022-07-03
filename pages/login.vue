<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:10:21
 * @LastEditTime: 2022-07-03 17:19:03
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
    <pre>{{ data }}</pre>
    <div>{{auth.access_token}}</div>
  </div>
</template>

<script setup>

const auth = useAuth();

const email = ref("test@test.com");
const password = ref("QWE123!@#");
let data = ref({})

const submit = async () => {
  console.log(email.value, password.value);

  // 登录，拿token，存token
  const { data: authRes } = await auth.login({
    email: email.value,
    password: password.value,
  });
  data.value = toRef(authRes, 'data')
  console.log(unref(authRes).data.access_token)
  // if (!authRes.data.value?.token) {
  //   // 登录失败
  //   return;
  // }
  // localStorage.setItem("token", authRes.data.value.token);
  // auth.token = authRes.data.value.token;

  // // 拿userInfo，正常则进入
  // const userRes = await api.auth.userInfo({
  //   project_id: "p_hu46xavt6mza8i",
  // });
  // console.log("userRes", toRaw(userRes.data.value));
};

// const userInfo = () => {
//   api.auth.userInfo({}).then(({ data }) => {
//     console.log("res", toRaw(data.value));
//   });
// };
</script>
