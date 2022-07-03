/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:11:30
 * @LastEditTime: 2022-07-03 21:55:46
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\middleware\auth.global.ts
 */
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[middleware] toName:', to.name)
    const tokenCookie = useCookie('access_token')
    console.log('yyy', tokenCookie.value)

    console.log('[middleware] formName:', from.name)
    // const auth = useAuth()
    // if (!auth.isLogged && to.name !== 'login') {
    //     return navigateTo('/login')
    // }

    // 判断是否位登录页，是则不处理。（理论上说，进入登录页也要判断登录状态，如果已登录， 则跳走。）
    // 判断userInfo，正常则不处理。
    // 判断accessToken，存在则请求userInfo。不存在提示并跳转登录页。
    // 判断serInfo， 正常则不处理，不正常提示并跳转登录页。

    // 判断token是否存在.
    // 不存在, 并且当前页不是/login, 则跳转到/login
    // 存在,
    // 若当前为/login, 则跳转首页
    // 判断用户权限数据
    // 不存在, 异步获取用户权限数据
    // 判断当前路由是否有权访问
    // 无权, 则渲染无权ui
})
