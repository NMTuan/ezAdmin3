<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-26 11:48:10
 * @LastEditTime: 2022-08-02 15:49:46
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\form\Select.vue
-->
<template>
    <MySelect :options="item.options" :fetchOptions="item.fetchOptions" v-model="data[item.field]"></MySelect>
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
