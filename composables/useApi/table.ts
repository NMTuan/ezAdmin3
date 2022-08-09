/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-08-09 10:27:02
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useApi\table.ts
 */
export default {
    fetch: (params) => {
        return useApiFetch('/items/table', {
            method: 'get',
            lazy: true,
            params: {
                ...params,
                meta: '*',
                sort: '-id'
            }
        })
    },
    fetchItem: (params) => {
        return useApiFetch(`/items/table/${params.id}`, {
            method: 'get',
            lazy: true,
            params: {
                meta: '*'
            }
        })
    },
    create: (data) => {
        return useApiFetch('/items/table', {
            method: 'post',
            body: data
        })
    },
    updateItem: (data) => {
        return useApiFetch(`/items/table/${data.id}`, {
            method: 'PATCH',
            body: data
        })
    },
    removeItem: (data) => {
        return useApiFetch(`/items/table/${data.id}`, {
            method: 'DELETE'
        })
    }
}
