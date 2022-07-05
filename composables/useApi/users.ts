/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-07-05 10:46:28
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\users.ts
 */
export default {
    me: () => {
        return useApiFetch('/users/me', {
            method: 'get',
            params: {
                fields: [
                    'email',
                    'role.admin_access',
                    'role.name',
                    'role.routes'
                ]
            }
        })
    }
}
