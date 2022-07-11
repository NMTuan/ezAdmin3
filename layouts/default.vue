<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-09 22:48:31
 * @LastEditTime: 2022-07-11 11:14:55
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\layouts\default.vue
-->
<template>
    <div class="h-full">
        <div class="relative bg-fixed" :style="{ backgroundImage }">
            <div class=" bg-neutral-100 w-64 fixed top-0 left-0 bottom-0">
                <div>LOGO</div>
                <LayoutMenu />
            </div>
            <div class="flex flex-col ml-64">
                <LayoutTop />
                <LayoutGuide />
                <slot />
                <div class="flex">
                    <NuxtLink :to="{ name: 'index' }">[index]</NuxtLink>
                    <NuxtLink :to="{ name: 'login' }">[login]</NuxtLink>
                    <NuxtLink :to="{ name: 'aa-aaa-aaaa' }">[/aa/aaa/aaaa]</NuxtLink>
                    <NuxtLink :to="{ name: 'aa-aaa222' }">[/aa/aaa222]</NuxtLink>
                    <NuxtLink :to="{ name: 'aa-aaa333' }">[/aa/aaa333]</NuxtLink>
                    <NuxtLink :to="{ name: 'bb' }">[/bb]</NuxtLink>
                    <NuxtLink :to="{ name: 'bb-id', params: { id: 1 } }">[/bb/1]</NuxtLink>
                    <NuxtLink :to="{ name: 'bb-id', params: { id: 2 } }">[/bb/2]</NuxtLink>
                    <NuxtLink :to="{ name: 'testaa' }">[/testaa]</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const backgroundImage = ref('')
onMounted(() => {
    backgroundImage.value = useBackgroundImage()
})
</script>
