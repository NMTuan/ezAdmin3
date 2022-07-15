/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:11:30
 * @LastEditTime: 2022-07-11 16:39:52
 * @LastEditors: NMTuan
 * @Description: 切换路由时, 记录访问的路由. 供多标签tabs使用.
 * @FilePath: \ezAdmin3\middleware\tabs.global.ts
 */

export default defineNuxtRouteMiddleware((to, from) => {
    const tabs = useTabs()
    tabs.insertTab(to.name ? to.name.toString() : '')
})
