/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 15:05:02
 * @LastEditTime: 2022-06-17 15:45:39
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
    }
})
