<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 16:52:47
 * @LastEditTime: 2022-07-15 11:11:29
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\simplebar\Index.vue
-->
<template>
    <div ref="element" x="bbb">
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
