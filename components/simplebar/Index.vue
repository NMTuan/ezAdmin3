<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 16:52:47
 * @LastEditTime: 2022-07-20 17:03:51
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\simplebar\Index.vue
-->
<template>
    <div ref="element" class="h-full w-full">
        <slot />
    </div>
</template>
<script setup>
import SimpleBar from 'simplebar/dist/simplebar.js';
import 'simplebar/dist/simplebar.css';

const element = ref(null)
onMounted(() => {
    const simpleBar = new SimpleBar(element.value, {
        timeout: 500
    })
})
</script>
<style>
.simplebar-scrollbar:before {
    background: #a3a3a3;
}
</style>
