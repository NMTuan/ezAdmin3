/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-08-05 17:45:20
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\office.ts
 */
export default {
    fetch: (params) => {
        return useApiFetch('/items/office', {
            method: 'get',
            lazy: true,
            params: {
                ...params,
                meta: '*'
            }
        })
    }
}
