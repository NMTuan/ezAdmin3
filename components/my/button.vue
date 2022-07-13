<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-08 15:42:41
 * @LastEditTime: 2022-07-13 11:56:11
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\Button.vue
-->
<template>
    <button class="myButton" :class="useClass" :disabled="props.disabled">
        <slot />
    </button>
</template>
<script setup lang="ts">
const props = defineProps({
    clearStyle: {   // 清除预设样式
        type: Boolean,
        default: false
    },
    type: { // 类型
        type: String,
        default: 'default',
        validator(value: string) {
            return [
                'default',
                'primary',
                'success',
                'warning',
                'danger',
                'info',
                'link'
            ].includes(value)
        }
    },
    size: { // 尺寸
        type: String,
        default: 'md',
        validator(value: string) {
            return [
                'xs',
                'md',
                'sm',
                'lg',
            ].includes(value)
        }

    },
    outline: {  // 边框
        type: Boolean,
        default: false
    },
    round: {  // 边角
        type: String,
        default: 'sm',
        validator(value: string) {
            return [
                'angle',
                'xs',
                'sm',
                'md',
                'lg',
                'full'
            ].includes(value)
        }

    },
    disabled: { // 禁用
        type: Boolean,
        default: false
    }

})

const useClass = computed(() => {
    let classNames: string[] = []

    if (props.clearStyle) {
        return classNames
    }

    classNames.push('leading-none') // 行高会影响按钮高度
    classNames.push('border')

    classNames.push('v-mid')    // 默认垂直居中?

    // 禁用
    if (props.disabled) {
        classNames.push('cursor-not-allowed')
        classNames.push('op-50')
    } else {
        classNames.push('cursor-pointer')
        classNames.push('hover:op-80')
    }

    // 样式
    if (props.outline) {
        switch (props.type) {
            case 'primary':
                classNames.push('bg-sky-50 text-sky-500 border-sky-200')
                break;
            case 'success':
                classNames.push('bg-emerald-50 text-emerald-500 border-emerald-200')
                break;
            case 'warning':
                classNames.push('bg-amber-50 text-amber-500 border-amber-200')
                break;
            case 'danger':
                classNames.push('bg-red-50 text-red-500 border-red-200')
                break;
            case 'info':
                classNames.push('bg-neutral-50 text-neutral-500 border-neutral-200')
                break;
            case 'link':
                classNames = classNames.filter(item => item !== 'border')
                classNames = classNames.filter(item => item !== 'op-50')
                classNames.push('border-none bg-transparent border-b underline underline-offset-4')
                break;
            case 'default':
            default:
                classNames.push('bg-white text-neutral-500 border-neutral-400')
        }
    } else {
        switch (props.type) {
            case 'primary':
                classNames.push('bg-sky-500 text-white border-sky-500')
                break;
            case 'success':
                classNames.push('bg-emerald-500 text-white border-emerald-500')
                break;
            case 'warning':
                classNames.push('bg-amber-500 text-white border-amber-500')
                break;
            case 'danger':
                classNames.push('bg-red-500 text-white border-red-500')
                break;
            case 'info':
                classNames.push('bg-neutral-500 text-white border-neutral-500')
                break;
            case 'link':
                classNames = classNames.filter(item => item !== 'border')
                classNames = classNames.filter(item => item !== 'op-50')
                classNames.push('border-none bg-transparent border-b')
                break;
            case 'default':
            default:
                classNames.push('bg-white text-neutral-600 border-neutral-400')
        }
    }

    // 尺寸
    switch (props.size) {
        case 'xs':
            classNames.push('text-xs px-1.5 py-1')
            break;
        case 'sm':
            classNames.push('text-sm px-2 py-1.5')
            break;
        case 'md':
        default:
            classNames.push('text-base px-3 py-2')
            break;
        case 'lg':
            classNames.push('text-lg px-4 py-2.5')
            break;
    }

    // 边角
    switch (props.round) {
        case 'angle':
            break;
        case 'xs':
            classNames.push('rounded-sm')
            break;
        case 'sm':
        default:
            classNames.push('rounded')
            break;
        case 'md':
            classNames.push(`rounded-md`)
            break;
        case 'lg':
            classNames.push('rounded-lg')
            break;
        case 'full':
            classNames.push('rounded-full')
            break;
    }

    return classNames
})


</script>
