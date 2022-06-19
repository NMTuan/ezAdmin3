/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:11:30
 * @LastEditTime: 2022-06-19 20:39:44
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
})
