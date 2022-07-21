<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-21 11:57:24
 * @LastEditTime: 2022-07-21 17:38:24
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\Select\Index.vue
-->
<template>
    <div ref="selectEl" class="mySelect" :class="useClass">
        <div class="mySelect__input" :class="inputClass" @click="showOptions = !showOptions">
            <div class="flex-1 truncate">
                {{ showText }}
            </div>
            <div class="flex-shrink-0 i-ri-arrow-down-s-line"> </div>
        </div>
        <div class="mySelect__Options" :class="optionsClass">
            <MySelectOption v-for="option in options" :option="option" @click="selectOption(option)" />
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    options: {
        type: Array,
        default: () => []
    },
    clearStyle: {   // 清除预设样式
        type: Boolean,
        default: false
    },
    size: { // 尺寸
        type: String,
        default: 'md',
        validator(value: string) {
            return [
                'xs',
                'sm',
                'md',
                'lg'
            ].includes(value)
        }
    },
    round: {  // 边角
        type: String,
        default: 'sm',
        validator(value: string) {
            return [
                'none',
                'xs',
                'sm',
                'md',
                'lg',
            ].includes(value)
        }
    },

})

provide('clearStyle', props.clearStyle)
provide('size', props.size)
provide('value', props.modelValue)

const emits = defineEmits([
    'update:modelValue'
])

const selectEl = ref(null)
const showOptions = ref(false)  // 是否显示下拉菜单
const showText = computed(() => {
    const currentOption = props.options.find(item => item.value === props.modelValue)
    return currentOption ? (currentOption?.label || '') : ''
})

// 监听下拉菜单状态, 展开后绑定关闭事件.
watch(showOptions, (value) => {
    if (value) {
        document.addEventListener('click', handleClose)
    } else {
        document.removeEventListener('click', handleClose)
    }
})

const handleClose = (e) => {
    if (!selectEl.value.contains(e.target)) {
        showOptions.value = false
    }
}

const handleChange = (e) => {
    emits('update:modelValue', e.target.value)
}

// 容器样式
const useClass = computed(() => {
    const className = []
    className.push('w-full relative')

    if (props.clearStyle) {
        return className
    }

    return className
})

// 文本区域样式
const inputClass = computed(() => {
    const className = []

    className.push('flex items-center overflow-hidden')

    if (props.clearStyle) {
        return className
    }
    className.push('leading-none')
    className.push('border border-neutral-300')

    // 尺寸
    switch (props.size) {
        case 'xs':
            className.push('h-5.5 text-xs px-1.5')
            break;
        case 'sm':
            className.push('h-7 text-sm px-2')
            break;
        case 'md':
        default:
            className.push('h-8.5 text-base px-3')
            break;
        case 'lg':
            className.push('h-10 text-lg px-4')
            break;
    }

    // 边角
    switch (props.round) {
        case 'none':
            break;
        case 'xs':
            className.push('rounded-sm')
            break;
        case 'sm':
        default:
            className.push('rounded')
            break;
        case 'md':
            className.push(`rounded-md`)
            break;
        case 'lg':
            className.push('rounded-lg')
            break;
    }

    return className
})

// 选项区域样式
const optionsClass = computed(() => {
    const className = []

    className.push('shadow absolute right-0 left-0 z-10')
    className.push('flex-shrink-0')

    className.push(showOptions.value ? 'block' : 'hidden')

    if (props.clearStyle) {
        return className
    }
    className.push('leading-none')
    className.push('border border-neutral-300 bg-white')

    // 尺寸
    switch (props.size) {
        case 'xs':
            className.push('py-0.75 mt-0.75')
            break;
        case 'sm':
            className.push('py-1 mt-1')
            break;
        case 'md':
        default:
            className.push('py-1.25 mt-1.25')
            break;
        case 'lg':
            className.push('py-1.5 mt-1.5')
            break;
    }

    // 边角
    switch (props.round) {
        case 'none':
            break;
        case 'xs':
            className.push('rounded-sm')
            break;
        case 'sm':
        default:
            className.push('rounded')
            break;
        case 'md':
            className.push(`rounded-md`)
            break;
        case 'lg':
            className.push('rounded-lg')
            break;
    }



    return className
})

// 点击option
const selectOption = (option) => {
    emits('update:modelValue', option.value)
    showOptions.value = false
}


</script>
