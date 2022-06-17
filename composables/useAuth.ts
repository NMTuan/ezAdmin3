/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:12:38
 * @LastEditTime: 2022-06-17 17:54:39
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useAuth.ts
 */

interface UseAuth {
    isLogged: boolean
}

export default () => {
    return useState<UseAuth>('useAuth', () => {
        return {
            isLogged: false
        }
    })
}
