/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-19 16:07:49
 * @LastEditTime: 2022-06-19 20:53:19
 * @LastEditors: NMTuan
 * @Description: 异步处理配置
 * @FilePath: \ezAdmin3\composables\useApiFetch.ts
 */

export default (url, options) => {
    const runtimeConfig = useRuntimeConfig()
    const auth = useAuth()

    return useFetch(url, {
        headers: {
            'xc-auth': auth.token
        },
        baseURL: runtimeConfig.public.apiBaseUrl,
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
        },
        ...options
    })
}
