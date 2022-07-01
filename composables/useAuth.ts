/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-07-01 17:51:34
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

import { defineStore } from 'pinia'
const api = useApi()

interface UseAuth {
    isLogged: boolean
    token: string
}

export default defineStore('auth', {
    state: (): UseAuth => {
        return {
            isLogged: false,
            token: ''
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
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    }
})
