/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-07-19 10:22:19
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
    }
}
