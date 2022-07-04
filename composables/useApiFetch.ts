/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-19 16:07:49
 * @LastEditTime: 2022-07-04 14:56:53
 * @LastEditors: NMTuan
 * @Description: 异步处理配置
 * @FilePath: \ezAdmin3\composables\useApiFetch.ts
 */

export default async (url, options) => {
    const auth = useAuth()
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
    if (!options.noAuth && auth.access_token) {
        delete options.noAuth
        params.headers = {
            Authorization: `Bearer ${auth.access_token}`
        }
    }

    // useFetch有参数缓存, 需换成useAsyncData
    // return useFetch(url, {
    //     ...params,
    //     ...options
    // })
    return useAsyncData(
        url,
        () =>
            $fetch(url, {
                ...params,
                ...options
            }),
        {
            initialCache: false // 禁止参数缓存, 默认开启. 开启时, 相同参数的请求不会发第二次.
        }
    )
}
