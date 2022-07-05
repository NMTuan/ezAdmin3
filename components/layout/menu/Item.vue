<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 13:48:16
 * @LastEditTime: 2022-07-05 14:38:08
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\Item.vue
-->
<template>
    <div>
        <NuxtLink :to="{ name: page.routeName }">{{ page.name }}</NuxtLink>
        <!-- <pre>{{ to }}</pre> -->
        <!-- <NuxtLink :to='{
            name: "1"
        }'> {{ page.name }} </NuxtLink> -->
        <!-- <pre>{{ page }}</pre> -->
    </div>
</template>
<script setup>
const props = defineProps({
    page: {}
})
console.log('page', props)
// const to = {
//     name: unref(props.page).routeName
// }
// const to = reactive({ name: unref(props.page).routeName })
</script>
