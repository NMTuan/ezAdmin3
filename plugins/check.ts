/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-06 11:35:34
 * @LastEditTime: 2022-07-06 15:16:55
 * @LastEditors: NMTuan
 * @Description: 权限指令
 *
 * 常用于判断功能按钮是否有权限.
 * 值填写要检测的路由名称, 如下:
 * v-check="'admin-create'"
 * 检测当前dom是否有`admin-create`权限, 有则不处理. 没有则移除该dom.
 *
 * @FilePath: \ezAdmin3\plugins\check.ts
 */
export default defineNuxtPlugin((nuxtApp) => {
    const auth = useAuth()
    nuxtApp.vueApp.directive('check', {
        mounted(el, { value }) {
            const authList = auth.authorizedPages
            // 管理员
            if (auth.authorizedPages.includes('*')) {
                return
            }
            // 有权限
            const authed = auth.authorizedPages.some((item) => {
                return item.routeName === value
            })
            // 无权限
            if (value && el.parentNode && !authed) {
                el.parentNode.removeChild(el)
            }
        }
    })
})
