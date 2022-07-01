/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-07-01 14:36:15
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\auth.ts
 */
export default {
    login: (data) => {
        return useApiFetch('/auth/login', {
            noAuth: true,
            method: 'post',
            body: data
        })
    }
    // userInfo: (params) => {
    //     return useApiFetch('/api/v1/db/auth/user/me', {
    //         params
    //     })
    // }
}
