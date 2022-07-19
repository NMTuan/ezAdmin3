<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 19:44:31
 * @LastEditTime: 2022-07-19 17:18:15
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\app.vue
-->
<template>
    <template v-if="auth.loaded">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </template>
    <template v-else>
        loading
    </template>
</template>
<script setup>
const auth = useAuth()
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}

html,
body,
#__nuxt {
    @apply bg-neutral-50 h-full overflow-hidden text-neutral-600;
}
</style>
