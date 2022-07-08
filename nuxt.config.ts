/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:05:02
 * @LastEditTime: 2022-07-08 16:31:54
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [`@/node_modules/normalize.css/normalize.css`],

    modules: ['@pinia/nuxt', '@unocss/nuxt'],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        transformers: [transformerDirective()],
        // core options
        shortcuts: [],
        rules: []
    },
    // 全局配置，这里只配置生产环境，其他环境请配置 /.env 文件
    runtimeConfig: {
        public: {
            siteName: 'ezAdmin3管理中心',
            apiBaseUrl: '', // 接口url
            loginFreeList: [] // 免登录页面 这里填的是路由名称routeName 需要注意, 这里是标准json格式, 需要双引号
        }
    }
})
