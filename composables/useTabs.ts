/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 11:47:04
 * @LastEditTime: 2022-07-11 21:12:41
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useTabs.ts
 */
import { defineStore } from 'pinia'

export default defineStore('tabs', {
    state: () => {
        return {
            opened: ['index'] // 已打开的页面, 存routeName
        }
    },
    actions: {
        insertTab(routeName: string = '') {
            if (!routeName) {
                return
            }
            const exist = this.opened.includes(routeName)
            if (!exist) {
                this.opened.push(routeName)
            }
        },
        removeTab(routeName: string = '') {
            const route = useRoute()
            const index = this.opened.indexOf(routeName)
            // 删掉当前tab
            this.opened = this.opened.filter((item) => item !== routeName)
            // 如果删掉的tab是当前route, 则跳转至前面一个tab
            if (route.name === routeName) {
                navigateTo({ name: this.opened[index - 1] })
            }
        }
    }
})
