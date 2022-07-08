<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-08 15:05:14
 * @LastEditTime: 2022-07-08 15:26:34
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\input.vue
-->
<template>
    <input :class='useClass' />
</template>

<script setup lang="ts">
const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    replaceClass: {
        type: Array,
        default: () => []
    }
})
const defaultClass = [
    'border',
    'border-red-400'
]
console.log(props.class)
const useClass = props.replaceClass.length > 0 ? props.replaceClass : [...defaultClass, ...props.class.split(' ')]
console.log(useClass)
</script>
