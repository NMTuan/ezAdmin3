<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-09 22:48:31
 * @LastEditTime: 2022-07-10 21:19:58
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
