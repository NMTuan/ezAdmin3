/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-07-03 21:45:45
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

import { defineStore } from 'pinia'
const api = useApi()

interface UseAuth {
    isLogged: boolean
    access_token: string
    refresh_token: string
}

export default defineStore('auth', {
    state: (): UseAuth => {
        return {
            isLogged: false,
            access_token: useCookie('access_token')?.value || '',
            refresh_token: useCookie('refresh_token')?.value || ''
        }
    },
    actions: {
        // 登录
        login(payload = {}) {
            return new Promise((resolve, reject) => {
                return api.auth
                    .login(payload)
                    .then((res) => {
                        if (unref(res.error) !== null) {
                            return
                        }
                        const { data } = unref(res.data)
                        useCookie('access_token').value = data.access_token
                        useCookie('refresh_token').value = data.refresh_token
                        this.access_token = data.access_token
                        this.refresh_token = data.refresh_token
                        console.log(this)
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    }
})
