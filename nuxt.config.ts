/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:05:02
 * @LastEditTime: 2022-06-19 17:30:52
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\nuxt.config.ts
 */
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt'],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,

        // core options
        shortcuts: [],
        rules: []
    },
    // 全局配置，这里只配置生产环境，其他环境请配置 /.env 文件
    runtimeConfig: {
        public: {
            apiBaseUrl: '' // 接口url
        }
    }
})
