<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 13:46:55
 * @LastEditTime: 2022-07-06 10:04:46
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\Index.vue
-->
<template>
    <div>
        <LayoutMenuList :pages="firsrLevelPages" />
    </div>
</template>
<script setup>
const auth = useAuth()
const firsrLevelPages = ref([])

watch(() => auth.authorizedPages, (newVal) => {
    firsrLevelPages.value = newVal.filter((page) => {
        return page.level === 1 && page.dynamicRoute === false
    })
})

</script>
