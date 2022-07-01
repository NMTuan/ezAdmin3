/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-01 11:41:10
 * @LastEditTime: 2022-07-01 13:49:59
 * @LastEditors: NMTuan
 * @Description:  api代理 https://github.com/nuxt/framework/discussions/4343
 * @FilePath: \ezAdmin3\server\middleware\api-proxy.js
 */
import { createProxyMiddleware } from 'http-proxy-middleware'
const runtimeConfig = useRuntimeConfig()

// import config from '#config'
const apiProxyMiddleware = createProxyMiddleware('/api/**', {
    target: runtimeConfig.public.apiBaseUrl,
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
})

export default async (req, res) => {
    // Workaround for h3 not awaiting next.
    await new Promise((resolve, reject) => {
        const next = (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        }
        apiProxyMiddleware(req, res, next)
    })
}
