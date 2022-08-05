<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-21 11:57:24
 * @LastEditTime: 2022-08-05 17:45:25
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\select\Index.vue
-->
<template>
    <div ref="selectEl" class="mySelect" :class="useClass" :style="useStyle">
        <div class="mySelect__input" :class="inputClass" @click="showOptions = !showOptions">
            <div class="flex flex-1 truncate">
                <template v-if="multiple">
                    <MySelectSelectedItem v-for="item in showValues" :item="item" />
                </template>
                <template v-else>
                    {{ showValues[0]?.label }}
                </template>
            </div>

            <div v-if="pending" class="flex-shrink-0 i-ri-loader-4-line text-neutral-200" animate-spin> </div>
            <div v-else class="flex-shrink-0 i-ri-arrow-down-s-line"> </div>
        </div>
        <div class="mySelect__Options" :class="optionsClass" v-if="showOptions">
            <MySelectOption v-for="option in options" :option="option" @click="selectOption(option)" />
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: [String, Number, Array],
        default: ''
    },
    options: {
        type: Array,
        default: () => []
    },
    fetchOptions: {
        type: Function,
        default: null
    },
    handleFetchOptionsRes: {
        type: Function,
        default: null
    },
    multiple: {
        type: Boolean,
        default: false
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
    minWidth: {
        type: String,
        default: '150px'
    }

})

const emits = defineEmits([
    'update:modelValue'
])


const selectEl = ref(null)  // 容器
const options = ref([])
const showOptions = ref(false)  // 是否显示下拉菜单
const values = computed(() => { // 已选值, 统一按array处理
    return Array.isArray(props.modelValue) ? JSON.parse(JSON.stringify(props.modelValue)) : [props.modelValue]
})

provide('clearStyle', props.clearStyle)
provide('size', props.size)
provide('values', values)
// 把更新方法传下去, 方便子组件更新
provide('update:modelValue', (val) => {
    updateModelValue(val)
})

const onChange = inject('on:change')

// 更新
const updateModelValue = (val) => {
    emits('update:modelValue', val)
    if (typeof onChange === 'function') {
        onChange()
    }
}

// 文本域显示的内容
const showValues = computed(() => {
    return values.value.reduce((total, val) => {
        const option = options.value.find(opt => opt.value === val)
        if (option) {
            total.push(option)
        }
        return total
    }, [])
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

// 容器样式
const useClass = computed(() => {
    const className = []
    className.push('w-full relative')

    if (props.clearStyle) {
        return className
    }

    return className
})
const useStyle = computed(() => {
    const styles = {}
    styles.minWidth = props.minWidth
    return styles
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
            className.push('h-8.5 text-base px-2.5')
            break;
        case 'lg':
            className.push('h-10 text-lg px-3')
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
    if (props.multiple) {
        console.log(111, values.value.includes(option.value))
        if (values.value.includes(option.value)) {
            const index = values.value.indexOf(option.value)
            values.value.splice(index, 1)

        } else {
            values.value.push(option.value)
        }
        updateModelValue(values.value)
        return
    }
    // 单选
    updateModelValue(option.value)
    showOptions.value = false
}

// 处理options
// if (typeof props.fetchOptions === 'function') {
//     loading.value = true
//     options.value = await props.fetchOptions()
//     loading.value = false
// } else {
//     options.value = props.options
// }

let pending

const handleFetchOptions = (data) => {
    console.log('[handleFetchOptions]', data)
    options.value = data.reduce((total, item) => {
        if (typeof props.handleFetchOptionsRes === 'function') {
            total.push(props.handleFetchOptionsRes(item))
        } else {
            total.push({
                label: item.label,
                value: item.value
            })
        }
        return total
    }, [])
}

if (typeof props.fetchOptions === 'function') {
    const res = props.fetchOptions()
    pending = res.pending
    watch(res.data, (val) => {
        handleFetchOptions(val.data)
    })
} else {
    options.value = props.options
}

</script>
