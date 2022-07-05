<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 17:12:07
 * @LastEditTime: 2022-07-05 17:34:36
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\List.vue
-->
<template>
    <div>
        <LayoutMenuItem v-for="page in pages" :page="page" />
    </div>
</template>
<script setup>
const props = defineProps({
    pages: []
})

</script>
