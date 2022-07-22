<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-22 10:01:04
 * @LastEditTime: 2022-07-22 10:53:19
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\Select\selectedItem.vue
-->
<template>
    <div class="" :class="useClass">
        {{ item.label }}
        <div class="i-ri-close-line" :class="iconClass" @click.stop="removeItem"></div>
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

const values = inject('values')
const clearStyle = inject('clearStyle')
const size = inject('size')
const update = inject('update:modelValue')

const removeItem = () => {
    update(values.value.filter(item => item !== props.item.value))
}

const useClass = computed(() => {
    const className = []
    className.push('flex items-center')

    if (clearStyle) {
        return className
    }

    // 尺寸
    switch (size) {
        case 'xs':
            className.push('py-0.25 px-1 mr-0.75')
            break;
        case 'sm':
            className.push('py-1 px-1.25 mr-2')
            break;
        case 'md':
        default:
            className.push('py-1.25 px-1.5 mr-1.25')
            break;
        case 'lg':
            className.push('py-1.5 px-1.75 mr-1.5')
            break;
    }

    className.push('bg-neutral-100 rounded')

    return className
})


const iconClass = computed(() => {
    const className = []

    if (clearStyle) {
        return className
    }

    className.push('cursor-pointer')
    className.push('hover:text-red-500')

    // 尺寸
    switch (size) {
        case 'xs':
            className.push('ml-1')
            break;
        case 'sm':
            className.push('ml-1.25')
            break;
        case 'md':
        default:
            className.push('ml-1.5')
            break;
        case 'lg':
            className.push('ml-1.75')
            break;
    }


    return className

})
</script>
