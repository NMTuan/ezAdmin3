<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-26 11:49:28
 * @LastEditTime: 2022-08-03 11:14:32
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\form\Input.vue
-->
<template>
    <MyInput v-model="data[item.field]" :disabled="item.disabled"></MyInput>
</template>
<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
const data = inject('data')
</script>
