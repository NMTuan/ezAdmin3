/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-07-18 21:11:06
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useFix\auth.ts
 */
export default {
    login: (data) => {
        return useApiFetch('/auth/login', {
            noAuth: true,
            method: 'post',
            body: data
        })
    }
}
