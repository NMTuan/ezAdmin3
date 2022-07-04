/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-07-04 11:51:01
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

import { defineStore } from 'pinia'
const api = useApi()

interface UseAuth {
    access_token: string
    refresh_token: string
    me: object
}

export default defineStore('auth', {
    state: (): UseAuth => {
        return {
            access_token: '',
            refresh_token: '',
            me: {}
        }
    },
    getters: {
        // 已登录?
        isLogged(state) {
            return Object.keys(state.me).length > 0
        }
    },
    actions: {
        // 登录
        login(payload = {}) {
            return new Promise((resolve, reject) => {
                return api.auth
                    .login(payload)
                    .then((res) => {
                        console.log(1111111111, res.pending.value)
                        if (unref(res.error) !== null) {
                            return
                        }
                        const { data } = unref(res.data)
                        useCookie('access_token').value = data.access_token
                        useCookie('refresh_token').value = data.refresh_token
                        this.access_token = data.access_token
                        this.refresh_token = data.refresh_token
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        // 获取当前用户信息
        getMe() {
            return new Promise((resolve, reject) => {
                return api.users
                    .me()
                    .then((res) => {
                        console.log(2222222, res.pending.value)
                        // if (unref(res.error) !== null) {
                        //     return
                        // }

                        // console.log(res.error.value)
                        // if (data.errors) {
                        //     reject(data.errors)
                        // } else {
                        //     this.me = data.data
                        //     resolve(res)
                        // }
                        resolve(res)
                    })
                    .catch((error) => {
                        console.log(22)
                        reject(error)
                    })
            })
        }
    }
})
