/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-08-02 11:08:22
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\table.ts
 */
export default {
    fetch: (params) => {
        return useApiFetch('/items/table', {
            method: 'get',
            params: {
                ...params,
                meta: '*'
            }
        })
    },
    create: (data) => {
        return useApiFetch('/items/table', {
            method: 'post',
            body: data
        })
    }
}
