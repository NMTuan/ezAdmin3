<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 15:50:05
 * @LastEditTime: 2022-07-18 16:25:28
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\table\index.vue
-->
<template>
    <div>
        <PageTableActions :actions="props.actions" />
        <NuxtPage />
        <MyTable :fields="props.fields" :data="props.data" />
    </div>
</template>
<script setup>
const props = defineProps({
    fields: {
        type: Array,
        default: () => []
    },
    data: {
        type: Array,
        default: () => []
    },
    actions: {
        type: Array,
        default: () => []
    }
})
</script>
