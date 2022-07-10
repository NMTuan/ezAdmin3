<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 13:46:55
 * @LastEditTime: 2022-07-10 16:49:54
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\Index.vue
-->
<template>
    <div class="h-full text-base leading-none overflow-y-auto">
        <ClientOnly>
            <LayoutMenuList :pages="firsrLevelPages" />
        </ClientOnly>
    </div>
</template>
<script setup>
const auth = useAuth()

// 找到顶级的菜单
const firsrLevelPages = ref([])
firsrLevelPages.value = auth.authorizedPages.filter((page) => {
    return page.level === 1 && page.dynamicRoute === false
})

// 保证权限变换后, 能及时渲染菜单
watch(() => auth.authorizedPages, (newVal) => {
    console.log('newVal', newVal)
    firsrLevelPages.value = newVal.filter((page) => {
        return page.level === 1 && page.dynamicRoute === false
    })
})
</script>
