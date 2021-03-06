/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-07-26 09:26:26
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

import { defineStore } from 'pinia'
const api = useApi()

interface UseAuth {
    loaded: boolean
    access_token: string
    refresh_token: string
    me: object
}

export default defineStore('auth', {
    state: (): UseAuth => {
        return {
            loaded: false,
            access_token: '',
            refresh_token: '',
            me: {}
        }
    },
    getters: {
        // 已登录?
        isLogged(state) {
            // console.log('me', JSON.stringify(state.me, null, 2))
            return state.me ? Object.keys(state.me).length > 0 : false
        },
        // 有权限的页面
        authorizedPages(state) {
            const { $pages } = useNuxtApp()
            // 异常 返回空数组
            if (!state.me?.role?.routes) {
                return []
            }
            // 管理员
            if (state.me.role.routes.includes('*')) {
                return $pages
            }
            // 非管理员
            return state.me.role.routes.reduce((total, item) => {
                const find = $pages.find((page) => page.fileName === item)
                if (find) {
                    total.push(find)
                }
                return total
            }, [])
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
                        this.loaded = true
                        if (unref(res.error) !== null) {
                            reject(res)
                            return
                        }
                        this.me = unref(res.data).data
                        resolve(res)
                    })
                    .catch((error) => {
                        this.loaded = true
                        reject(error)
                    })
            })
        },
        // 登出
        logout() {
            return new Promise((resolve, reject) => {
                api.auth
                    .logout({
                        refresh_token: this.refresh_token
                    })
                    .then((res) => {
                        if (unref(res.error) !== null) {
                            reject(res)
                            return
                        }
                        // 清除本地内容
                        // useCookie('access_token').value = ''
                        // useCookie('refresh_token').value = ''
                        // this.access_token = ''
                        // this.refresh_token = ''
                        // this.me = {}
                        this.clearUserInfo()
                        alert('已退出')
                        navigateTo({ name: 'login' })
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
        // 清除用户信息
        clearUserInfo() {
            useCookie('access_token').value = ''
            useCookie('refresh_token').value = ''
            this.access_token = ''
            this.refresh_token = ''
            this.me = {}
        }
    }
})
