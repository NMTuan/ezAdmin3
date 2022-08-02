/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-08-02 14:39:06
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\office.ts
 */
export default {
    fetch: (params) => {
        return useApiFetch('/items/office', {
            method: 'get',
            params: {
                ...params,
                meta: '*'
            }
        })
    }
}
