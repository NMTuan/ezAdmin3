<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-09 22:48:31
 * @LastEditTime: 2022-07-10 16:45:01
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\layouts\default.vue
-->
<template>
    <div class="h-full overflow-hidden">
        <div class="flex h-full" :style="{ backgroundImage }">
            <div class="flex-shrink-0 bg-neutral-100 w-64">
                <LayoutMenu />
            </div>
            <div class="flex-1 h-full overflow-y-auto">
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
