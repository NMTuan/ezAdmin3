/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-07-04 21:45:58
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
            console.log('me', JSON.stringify(state.me, null, 2))
            return state.me ? Object.keys(state.me).length > 0 : false
        }
    },
    actions: {
        // 登录
        login(payload = {}) {
            return new Promise((resolve, reject) => {
                api.auth
                    .login(payload)
                    .then((res) => {
                        if (unref(res.error) !== null) {
                            reject(res)
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
                api.users
                    .me()
                    .then((res) => {
                        if (unref(res.error) !== null) {
                            reject(res)
                            return
                        }
                        this.me = unref(res.data).data
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        logout() {
            return new Promise((resolve, reject) => {
                api.auth
                    .logout({
                        refresh_token: this.refresh_token
                    })
                    .then((res) => {
                        if (unref(res.error) !== null) {
                            // TODO 清除本地内容。跳转页面
                            reject(res)
                            return
                        }
                        // this.me = unref(res.data).data
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    }
})
