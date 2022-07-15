/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:05:02
 * @LastEditTime: 2022-07-10 09:32:05
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'
// import presetIcons from '@unocss/preset-icons'

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
        rules: [],
        safelist: [...Array.from({ length: 4 }, (_, i) => `pl-${(i + 1) * 4}`)]
        // presets: [
        //     presetIcons()
        // ]
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
