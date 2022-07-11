/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 11:47:04
 * @LastEditTime: 2022-07-11 13:49:05
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \ezAdmin3\composables\useTabs.ts
 */
import { defineStore } from 'pinia'

export default defineStore('tabs', {
    state: () => {
        return {
            opened: [] // 已打开的页面, 存routeName
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
        }
    }
})
