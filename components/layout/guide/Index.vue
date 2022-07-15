<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-10 19:53:44
 * @LastEditTime: 2022-07-10 20:40:34
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\guide\Index.vue
-->
<template>
    <div class="flex text-xs p-4 ">
        <div class="mr-4 pr-4 border-r border-neutral-200 text-neutral-600 text-lg font-bold leading-none">
            {{ current.name }}
        </div>
        <div class="flex-shrink-0 flex items-center text-neutral-500">
            <template v-if="index.name !== current.name">
                {{ index.name }}
                <div v-if="matched.length > 0" class="mx-2">/</div>
            </template>
            <div v-for="(item, index) in matched" class="flex items-center">
                {{ item.components.default?.page?.name || item.name }}
                <div v-if="index !== matched.length - 1" class="mx-2">/</div>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const { $pages } = useNuxtApp()

// 首页
const index = $pages.find(page => page.routeName == 'index')
// 当前页
const current = computed(() => {
    return $pages.find(page => page.routeName == route.name)
})
// 导航
const matched = computed(() => {
    return route.matched
})
</script>
