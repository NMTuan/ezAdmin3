/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 11:14:27
 * @LastEditTime: 2022-07-05 17:30:23
 * @LastEditors: NMTuan
 * @Description: 读取所有页面中的配置. 供菜单/权限使用.
 * @FilePath: \ezAdmin3\plugins\pages.ts
 *
 * name             [String]  当前栏目/页面的名字
 * icon             [String]  TODO: 当前栏目/页面名字前面的图标class 没有则不显示
 * disabledCache    [Boolean] TODO: 是否禁止keep-alive, 注意如果vue组件定义了name, 则无法被缓存.
 * hideMenu         [Boolean] TODO: 不在侧边显示
 * highLightMenu    []        TODO: 手工指定高亮哪个菜单项
 * sort             [number]  TODO: 排序
 */

export default defineNuxtPlugin((nuxtApp) => {
    console.log('page plugins')
    const files = import.meta.globEager('@/pages/**/*.vue')
    const pages = Object.keys(files).reduce((total, key) => {
        // if (key === '../pages/bb.vue') {
        //     console.log(key)
        //     console.log(files[key].default)
        // console.log(JSON.stringify(files[key].default, null, 2))
        // }
        const fileName = key.replace(/^\.\.\/pages\/(.*)\.\w+$/, '$1')
        if (files[key].default.page) {
            total.push({
                ...files[key].default.page,
                fileName, // 文件名称, 没有.vue
                dynamicRoute: fileName.includes('['), //是否动态路由, 动态路由不在菜单张显示.
                routeName: fileName // 路由名称
                    .replace(/\//gi, '-')
                    .replace(/\[/gi, '')
                    .replace(/\]/gi, ''),
                level: fileName.split('/').length // 层级
            })
        }
        return total
    }, [])
    // console.log(JSON.stringify(pages, null, 2))

    return {
        provide: {
            pages
        }
    }
})
