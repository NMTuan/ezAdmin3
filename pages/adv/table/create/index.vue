<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 16:15:35
 * @LastEditTime: 2022-07-20 17:22:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table\create\index.vue
-->
<template>
    <LayoutDrawer title="Create Data">
        <p v-for="i in 30">{{ i }}</p>
    </LayoutDrawer>
</template>
<script>
export default {
    page: {
        name: 'Create'
    }
}
</script>
