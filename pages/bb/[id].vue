<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 10:55:40
 * @LastEditTime: 2022-07-05 11:42:04
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\bb\[id].vue
-->
<template>
    <div>
        /bb/{{ $route.params.id }} page
    </div>
</template>
<script setup>
definePageMeta({
    title: 'bb-id'
})

const route = useRoute()

console.log('bb-id', route.meta.title)
</script>
<script>
export default {
    page: {
        name: 'bb-[id]页面'
    }
}

</script>
