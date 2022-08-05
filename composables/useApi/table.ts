/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:31:07
 * @LastEditTime: 2022-08-05 10:50:47
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
                meta: '*',
                sort: '-id'
            }
        })
    },
    fetchItem: (params) => {
        return useApiFetch(`/items/table/${params.id}`, {
            method: 'get',
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
        const id = data.id
        delete data.id

        return useApiFetch(`/items/table/${id}`, {
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
