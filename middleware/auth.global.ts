/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:11:30
 * @LastEditTime: 2022-07-01 16:31:18
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\middleware\auth.global.ts
 */
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[middleware] toName:', to.name)
    console.log('[middleware] formName:', from.name)
    const auth = useAuth()
    if (!auth.isLogged && to.name !== 'login') {
        return navigateTo('/login')
    }

    // 判断token是否存在.
    // 不存在, 并且当前页不是/login, 则跳转到/login
    // 存在,
    // 若当前为/login, 则跳转首页
    // 判断用户权限数据
    // 不存在, 异步获取用户权限数据
    // 判断当前路由是否有权访问
    // 无权, 则渲染无权ui
})
