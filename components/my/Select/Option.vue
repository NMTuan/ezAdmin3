<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-21 16:44:57
 * @LastEditTime: 2022-07-22 10:39:22
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\Select\Option.vue
-->
<template>
    <div class="mySelect__Option
    hover:bg-neutral-100
    " :class="optionClass">{{ option.label }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
    option: {
        type: Object,
        default: () => ({
            label: '',
            value: ''
        })
    }
})
const clearStyle = inject('clearStyle')
const size = inject('size')
const values = inject('values')

const optionClass = computed(() => {
    const className = []
    if (clearStyle) {
        return className
    }
    className.push('leading-none')

    // 尺寸
    switch (size) {
        case 'xs':
            className.push('text-xs px-1.5 py-0.75')
            break;
        case 'sm':
            className.push('text-sm px-2 py-1')
            break;
        case 'md':
        default:
            className.push('text-base px-2.5 py-1.25')
            break;
        case 'lg':
            className.push('text-lg px-3 py-1.5')
            break;
    }

    // 高亮选中项
    if (values.value.includes(props.option.value)) {
        className.push('bg-sky-500 text-white')
        className.push('hover:bg-sky-500')
    }

    return className
})

</script>
