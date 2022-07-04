/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-07-04 15:42:08
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\users.ts
 */
export default {
    me: () => {
        return useApiFetch('/users/me', {
            method: 'get'
        })
    }
}
