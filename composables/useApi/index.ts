/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-18 22:05:42
 * @LastEditTime: 2022-07-01 17:04:25
 * @LastEditors: NMTuan
 * @Description: 自动加载api
 * @FilePath: \ezAdmin3\composables\useApi\index.ts
 */
// import auth from './auth'
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
    return api
}
