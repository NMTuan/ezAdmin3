/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-06-19 17:44:01
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\auth.ts
 */
export default {
    singIn: (data) => {
        return useApiFetch('/api/v1/db/auth/user/signin', {
            method: 'post',
            body: data
        })
    },
    userInfo: (params) => {
        return useApiFetch('/api/v1/db/auth/user/me', {
            params
        })
    }
}
