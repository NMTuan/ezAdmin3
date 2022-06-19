/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-06-19 20:43:32
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

import { defineStore } from 'pinia'

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
    }
})
