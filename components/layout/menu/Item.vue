<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 13:48:16
 * @LastEditTime: 2022-07-05 17:51:08
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\Item.vue
-->
<template>
    <div>
        <template v-if="children.length === 0">
            <NuxtLink :to="{ name: page.routeName }">{{ page.name }}</NuxtLink>
        </template>
        <template v-else>
            <div>{{ page.name }}</div>
            <div class="pl-4">
                <LayoutMenuList :pages="children" />
            </div>
        </template>
    </div>
</template>
<script setup>
const { $pages } = useNuxtApp()
const props = defineProps({
    page: {}
})

const reg = new RegExp(`^${props.page.fileName}/`)  // 子页面以父页面的文件名开头.
const children = $pages.filter((page) => {
    return page.level === props.page.level + 1 && page.dynamicRoute === false && reg.test(page.fileName)
})
</script>
