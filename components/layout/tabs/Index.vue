<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 13:47:07
 * @LastEditTime: 2022-07-11 16:12:38
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\tabs\Index.vue
-->
<template>
    <div class="flex text-sm">
        <template v-for="item in items">
            <div v-if="route.name === item.routeName"
                class="flex-shrink-0 px-3 py-2 mx-1 bg-sky-500 text-white leading-none rounded cursor-default">
                {{ item.name }}
            </div>
            <NuxtLink v-else :to="{ name: item.routeName }" class="flex-shrink-0 px-3 py-2 mx-1 bg-neutral-100 text-neutral-500 leading-none rounded no-underline
                hover:bg-neutral-200
                ">
                {{ item.name }}
            </NuxtLink>
        </template>
    </div>
</template>
<script setup>
const tabs = useTabs()
const route = useRoute()
const { $pages } = useNuxtApp()

// 过滤掉部分动态路由和页内操作项.
// 把$pages中能形成树的结点都摘出来. 不能形成树的认定为页内操作项. 同时, 动态路由也不包含在内.
const treeNodes = []
const handleTreeNodes = (routeName = '', level = 0) => {
    level++
    // level一致, routeName匹配, 非动态路由
    const pages = $pages.filter(page => page.level === level && page.routeName.indexOf(routeName) === 0 && !page.dynamicRoute)
    pages.forEach(page => {
        treeNodes.push(page)
        handleTreeNodes(page.routeName, level)
    })
}
handleTreeNodes()

// 把store中存的opened对应的page数据换出来.
const items = computed(() => {
    return tabs.opened.reduce((total, tab) => {
        const exist = treeNodes.find(page => page.routeName === tab)
        if (exist) {
            total.push(exist)
        }
        return total
    }, [])
})

</script>
