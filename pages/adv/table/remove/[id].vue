<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-03 14:51:41
 * @LastEditTime: 2022-08-09 11:09:24
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\adv\table\remove\[id].vue
-->
<template>
    <PageConfirm :title="title" :submitApi="submitApi">
        确定要删除此数据么?
    </PageConfirm>
</template>
<script setup>
const api = useApi()
const title = 'Remove item'
const submitApi = api.table.removeItem
</script>
<script>
export default {
    page: {
        name: 'Remove'
    }
}
</script>
