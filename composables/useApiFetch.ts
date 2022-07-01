/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-19 16:07:49
 * @LastEditTime: 2022-07-01 15:48:06
 * @LastEditors: NMTuan
 * @Description: 异步处理配置
 * @FilePath: \ezAdmin3\composables\useApiFetch.ts
 */

export default (url, options) => {
    const params = {
        headers: {},
        baseURL: '/api',
        // 拦截器 https://github.com/unjs/ohmyfetch#%EF%B8%8F-interceptors
        async onRequestError({ request, options, error }) {
            // Log error
            console.log('[apiFetch request error]', request, error.message)
        },
        async onResponseError({ request, response, options }) {
            // Log error
            console.log(
                '[apiFetch respone error]',
                response.status,
                response._data
            )
        }
    }

    // 限定该请求的header中不带token
    if (!options.noAuth) {
        delete options.noAuth
        params.headers = {
            // TODO 使用真实Token
            Authorization: `Bearer 123`
        }
    }

    return useFetch(url, {
        ...params,
        ...options
    })
}
