<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 17:12:07
 * @LastEditTime: 2022-07-05 20:12:48
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
    pages: {
        type: Array,
        default: () => []
    }
})

// 排序，sort值越小排名越靠前，未设定的统统往后排
const sortedPages = props.pages.sort((a, b) => {
    let x = a.sort || 10000
    let y = b.sort || 10000
    x = typeof x === 'string' ? Number(x) : x
    y = typeof y === 'string' ? Number(y) : y
    return x - y
})

</script>
