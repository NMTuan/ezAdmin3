/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-06-19 18:02:32
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

interface UseAuth {
    isLogged: boolean
    token: string
}

export default () => {
    return useState<UseAuth>('useAuth', () => {
        return {
            isLogged: false,
            token: ''
        }
    })
}
