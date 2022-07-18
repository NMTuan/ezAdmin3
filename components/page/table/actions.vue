<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 16:20:32
 * @LastEditTime: 2022-07-18 16:28:16
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\table\actions.vue
-->
<template>
    <div>
        <div class="pb-4">
            <MyButton v-for="action in props.actions" @click="handleClick(action)">
                {{ action.label }}
            </MyButton>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    actions: {
        type: Array,
        default: () => []
    }
})

// 点击事件
const handleClick = ({ toName }) => {
    console.log('toName', toName)
    if (!toName) {
        return
    }
    navigateTo({ name: toName })
}
</script>
<style lang="scss" scoped>
.myButton+.myButton {
    @apply ml-2
}
</style>
