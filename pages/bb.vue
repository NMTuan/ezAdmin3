<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 10:47:26
 * @LastEditTime: 2022-07-05 19:51:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\bb.vue
-->
<template>
    <div>
        <div>bb page</div>
        <hr>
        <NuxtPage />

    </div>
</template>
<script setup>
definePageMeta({
    title: '自定义标题'
})
const route = useRoute()
console.log('bb', route.meta.title)
</script>
<script>
export default {
    page: {
        name: 'bb页面',
        sort: 200
    }
}

</script>
