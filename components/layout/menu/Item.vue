<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 13:48:16
 * @LastEditTime: 2022-07-11 11:11:24
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\Item.vue
-->
<template>
    <div :class="{
        'bg-neutral-400/8': !collapsed,
        'border-y border-neutral-400/16 ': !collapsed
        // 'shadow-inner': !collapsed
    }">
        <!-- 没有子菜单 -->
        <template v-if="children.length === 0">
            <!-- 高亮状态 -->
            <div v-if="route.name === page.routeName" :class="`pl-${page.level * 4}`"
                class="flex items-center block py-4 pr-4 bg-sky-500 text-white">
                <div v-if="page.icon" :class="page.icon" class="mr-2"></div>
                <div v-if="page.level !== 1" class="i-ri-subtract-fill text-xs mr-2 text-white"></div>
                <div class="truncate">{{ page.name }}</div>
            </div>
            <!-- 默认状态 -->
            <NuxtLink v-else :class="`pl-${page.level * 4}`" class="flex items-center block py-4 pr-4 text-neutral-600 no-underline transition-all
            hover:bg-neutral-200
            " :to="{ name: page.routeName }">
                <div v-if="page.icon" :class="page.icon" class="mr-2"></div>
                <div v-if="page.level !== 1" class="i-ri-subtract-fill text-xs mr-2 text-neutral-400"></div>
                <div class="truncate">{{ page.name }}</div>
            </NuxtLink>
        </template>
        <!-- 有子菜单 -->
        <template v-else>
            <div :class="`pl-${page.level * 4}`" class="flex py-4 pr-4 text-neutral-600 transition-all 
            hover:bg-neutral-200
            " @click="toggleMenu">
                <div class="flex-1 truncate">{{ page.name }}</div>
                <div v-if="collapsed === true" class="i-ri-arrow-down-s-line"></div>
                <div v-else class="i-ri-arrow-up-s-line"></div>
            </div>
            <!-- 子菜单 -->
            <div class="overflow-hidden" :class="{
                'hidden': collapsed,
                'block': !collapsed
            }">
                <LayoutMenuList :pages="children" />
            </div>
        </template>
    </div>
</template>
<script setup>
const auth = useAuth()
const route = useRoute()
const collapsed = ref(true)    // 子菜单默认是否收起

const props = defineProps({
    page: {}
})

// 切换子菜单闭合状态
const toggleMenu = () => {
    collapsed.value = !collapsed.value
}

// 子页面以父页面的文件名开头.
const reg = new RegExp(`^${props.page.fileName}/`)
// 找 所有子页面
const children = auth.authorizedPages.filter((page) => {
    return page.level === props.page.level + 1 && page.dynamicRoute === false && reg.test(page.fileName)
})

// 根据当前路由. 展开上级/上级/上级的菜单
// 把当前路由按`-`分割, 除去最后一位, 循环拼接. 找到对应的page, 展开.
watch(route, (newVal) => {
    const arr = newVal.name.split('-')
    arr.splice(arr.length - 1, 1)
    arr.reduce((total, item) => {
        total.push(item)
        if (total.length > 0 && props.page.routeName === total.join('-')) {
            collapsed.value = false
        }
        return total
    }, [])
}, {
    immediate: true
})

</script>
