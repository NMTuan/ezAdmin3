<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-02 16:11:16
 * @LastEditTime: 2022-08-02 16:50:27
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\table\cell\Action.vue
-->
<template>
    <div>
        <MyButton v-for='item in field.actionItems' @click="handleClick(item)">
            {{ item.label }}
        </MyButton>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    row: {
        type: Object,
        default: () => ({})
    },
    field: {
        type: Object,
        default: () => ({})
    }
})

const handleClick = (item) => {
    //{label, toName, payload}
    let payload = {}
    if (typeof item.payload === 'function') {
        payload = Object.assign({}, payload, item.payload({ row: props.row }))
    }
    if (item.toName) {
        navigateTo({
            name: item.toName,
            params: payload
        })
    }
}
</script>
