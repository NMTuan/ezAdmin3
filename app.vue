<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 19:44:31
 * @LastEditTime: 2022-07-11 11:12:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\app.vue
-->
<template>
    <main class="h-full">
        <template v-if="auth.loaded">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>

        </template>
        <template v-else>
            loading
        </template>
    </main>
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
    @apply bg-neutral-50 h-full;
}
</style>
