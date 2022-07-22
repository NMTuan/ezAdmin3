/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 20:35:32
 * @LastEditTime: 2022-07-18 21:15:37
 * @LastEditors: NMTuan
 * @Description: 临时修复一个报错:
 * 
 * [nuxt] [request error] __vite_ssr_import_0__.default is not a function
 * at $id_ugW7Jl6Lz5 (/C:/Users/NMTua/Documents/project/ezAdmin3/.nuxt/dist/server/server.mjs:7221:42)
 * at async __instantiateModule__ (/C:/Users/NMTua/Documents/project/ezAdmin3/.nuxt/dist/server/server.mjs:13290:3)
 * 
 * 在app.vue或者layouts中使用useApi()没问题, 但在pages内页面使用则会报上面的错误.
 * 找不到问题原因. 本以为复刻一个useTest尝试, 发现放在useApi()前面就没问题了.
 * 临时更名位useFix先用着.
 * TODO
 * 
  @FilePath: \ezAdmin3\composables\useTest\index.ts
 */
interface Api {
    [propName: string]: any
}

const api: Api = {}
const files = import.meta.globEager('./*.ts')
Object.keys(files).forEach((key) => {
    const label = key.replace(/^\.\/(.*?)\.ts$/gi, '$1')
    api[label] = files[key].default
})

export default () => {
    return {}
}
