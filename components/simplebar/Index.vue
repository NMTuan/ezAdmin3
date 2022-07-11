<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 16:52:47
 * @LastEditTime: 2022-07-11 17:26:52
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
import SimpleBar from 'simplebar/dist/simplebar';
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
