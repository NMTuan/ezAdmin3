<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-09 22:48:31
 * @LastEditTime: 2022-07-19 17:29:26
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\layouts\default.vue
-->
<template>
    <Simplebar id="main" class="h-full">
        <div class="relative">
            <div class="flex flex-col bg-neutral-100 w-64 fixed top-0 left-0 bottom-0 z-10">
                <div class="flex-shrink-0 text-center py-6 text-xl text-neutral-600 font-bold">
                    {{ config.public.siteName }}
                </div>
                <div class="flex flex-1 overflow-hidden">
                    <Simplebar class="flex-1">
                        <LayoutMenu />
                    </Simplebar>
                </div>
            </div>
            <div class="flex flex-col ml-64 z-5">
                <LayoutTop />
                <LayoutGuide />
                <slot />
                <!-- <div class="flex">
                    <NuxtLink :to="{ name: 'index' }">[index]</NuxtLink>
                    <NuxtLink :to="{ name: 'login' }">[login]</NuxtLink>
                    <NuxtLink :to="{ name: 'aa-aaa-aaaa' }">[/aa/aaa/aaaa]</NuxtLink>
                    <NuxtLink :to="{ name: 'aa-aaa222' }">[/aa/aaa222]</NuxtLink>
                    <NuxtLink :to="{ name: 'aa-aaa333' }">[/aa/aaa333]</NuxtLink>
                    <NuxtLink :to="{ name: 'bb' }">[/bb]</NuxtLink>
                    <NuxtLink :to="{ name: 'bb-id', params: { id: 1 } }">[/bb/1]</NuxtLink>
                    <NuxtLink :to="{ name: 'bb-id', params: { id: 2 } }">[/bb/2]</NuxtLink>
                    <NuxtLink :to="{ name: 'testaa' }">[/testaa]</NuxtLink>
                </div> -->
            </div>
        </div>
    </Simplebar>
</template>
<script setup>
const config = useRuntimeConfig()
const route = useRoute()
watch(() => route.name, () => {
    document.querySelector('#main .simplebar-content-wrapper').scrollTop = 0
})
</script>
