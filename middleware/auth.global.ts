/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-06-17 17:11:30
 * @LastEditTime: 2022-07-26 09:26:55
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\middleware\auth.global.ts
 */

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[middleware] toName:', to.name)
    console.log('[middleware] formName:', from.name)

    const auth = useAuth()
    const config = useRuntimeConfig()
    const loginFreeList = Object.values(config.public.loginFreeList)

    // 如果已登录, 则不再处理后续逻辑
    if (auth.isLogged) {
        // 如果在登录页, 则跳走.
        if (to.name === 'login') {
            console.log('xxxx')
            return navigateTo({ name: 'index' })
        }
        // 判断前进的页面是否有权限, 这里是前端路由跳转时判断.
        // 并且不再免登录名单中.
        const exist = auth.authorizedPages.find(
            (item) => item.routeName === to.name
        )
        if (
            exist === undefined &&
            !loginFreeList.includes(to.name.toString())
        ) {
            alert('无权访问')
            return abortNavigation()
        }
        return
    }

    // 首先拿token
    auth.access_token = auth.access_token || useCookie('access_token').value
    auth.refresh_token = auth.refresh_token || useCookie('refresh_token').value

    // 如果没拿到token, 并且当前页面非登录页, 并且不再免登录名单中, 跳转至登录页面.
    if (
        !auth.access_token &&
        to.name !== 'login' &&
        !loginFreeList.includes(to.name.toString())
    ) {
        // if (process.client) {
        //     alert('请先登录')
        // }
        return navigateTo({ name: 'login' })
    }

    // 如果拿到token, 去请求当前用户信息.
    if (process.client) {
        auth.getMe()
            .then((): any => {
                //如果拿到用户信息, 并且是登录页, 则跳转到首页.
                // TODO 以后要记录来源, 跳转到来源页面
                if (to.name === 'login') {
                    navigateTo({ name: 'index' })
                }
                // 判断前进的页面是否有权限, 这里是首次访问时判断.
                // 并且不再免登录名单中.
                const exist = auth.authorizedPages.find(
                    (item) => item.routeName === to.name
                )
                if (
                    exist === undefined &&
                    !loginFreeList.includes(to.name.toString())
                ) {
                    alert('无权访问')
                    return navigateTo({ name: 'index' })
                }
            })
            .catch((error) => {
                // 如果拿不到当前用户信息, 并且非登录页, 并且不再免登录名单里, 提示并跳转登录页.
                if (
                    to.name !== 'login' &&
                    !loginFreeList.includes(to.name.toString())
                ) {
                    if (process.client) {
                        alert('登录超时')
                    }
                    auth.clearUserInfo()
                    navigateTo({ name: 'login' })
                }
            })
    }
})
