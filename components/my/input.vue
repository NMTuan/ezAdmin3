<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-08 15:05:14
 * @LastEditTime: 2022-07-13 17:29:19
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\input.vue
-->
<template>
    <div class="myInput flex items-center" :class="useClass">

        <!-- 文本域 -->
        <textarea v-if="type === 'textarea'" class="myInput__textarea" :class='inputClass' autocomplete="off"
            v-bind="$attrs" :value="modelValue" @input="updateVal" />

        <!-- 密码框 -->
        <input v-else-if="type === 'password'" type="password" class="myInput__input" :class='inputClass'
            autocomplete="off" v-bind="$attrs" :value="modelValue" @input="updateVal" />

        <!-- 其它 -->
        <input v-else class="myInput__input" :class='inputClass' autocomplete="off" v-bind="$attrs" :type="type"
            :value="modelValue" @input="updateVal" />

        <!-- 密码框的眼睛 -->
        <div v-if="props.type === 'password' && props.showPassword" class="cursor-pointer" :class="eyeClassName"
            @click="changeShowPassword"></div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    clearStyle: {   // 清除预设样式
        type: Boolean,
        default: false
    },
    type: { // 类型
        type: String,
        default: 'input',
        validator(value: string) {
            return [
                'input',
                'password',
                'textarea',
            ].includes(value)
        }
    },
    border: { // 类型
        type: String,
        default: 'default',
        validator(value: string) {
            return [
                'default',
                'primary',
                'success',
                'warning',
                'danger',
                'info'
            ].includes(value)
        }
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
                'full'
            ].includes(value)
        }
    },
    showPassword: {
        type: Boolean,
        default: false
    }

})
const emits = defineEmits(['update:modelValue'])

const type = ref(props.type)    // 类型, 由于showPassword动态改变, 所以组件内copy一份.

// 外面容器
const useClass = computed(() => {
    let classNames: string[] = []

    if (props.clearStyle) {
        return classNames
    }
    classNames.push('overflow-hidden')
    classNames.push('border')

    // 边框
    switch (props.border) {
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
        case 'default':
        default:
            classNames.push('bg-white text-neutral-500 border-neutral-400')
    }


    // 边角
    switch (props.round) {
        case 'none':
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

// input元素
const inputClass = computed(() => {
    let classNames: string[] = []
    classNames.push('w-full')

    if (props.clearStyle) {
        return classNames
    }
    classNames.push('leading-none') // 行高会影响按钮高度
    classNames.push('border-0')
    classNames.push('outline-0')
    classNames.push('bg-transparent')

    // 尺寸
    switch (props.size) {
        case 'xs':
            classNames.push('text-xs px-1.5 py-0.5')
            break;
        case 'sm':
            classNames.push('text-sm px-2 py-0.875')
            break;
        case 'md':
        default:
            classNames.push('text-base px-3 py-1.375')
            break;
        case 'lg':
            classNames.push('text-lg px-4 py-1.75')
            break;
    }

    // 边框
    switch (props.border) {
        case 'primary':
            classNames.push('placeholder-sky-300 text-sky-500')
            break;
        case 'success':
            classNames.push('placeholder-emerald-300 text-emerald-500')
            break;
        case 'warning':
            classNames.push('placeholder-amber-300 text-amber-500')
            break;
        case 'danger':
            classNames.push('placeholder-red-300 text-red-500')
            break;
        case 'info':
            classNames.push('placeholder-neutral-300 text-neutral-500')
            break;
        case 'default':
        default:
            classNames.push('placeholder-neutral-300 text-neutral-500')
    }


    return classNames
})

// 更新值
const updateVal = (e) => {
    emits('update:modelValue', e.target.value)
}

const eyeClassName = computed(() => {
    const classNames = []
    classNames.push(type.value === 'password' ? 'i-ri-eye-line' : 'i-ri-eye-off-line')

    if (props.clearStyle) {
        return classNames
    }

    switch (props.size) {
        case 'xs':
            classNames.push('text-xs mr-1.5')
            break;
        case 'sm':
            classNames.push('text-sm mr-2')
            break;
        case 'md':
        default:
            classNames.push('text-base mr-3')
            break;
        case 'lg':
            classNames.push('text-lg mr-4')
            break;
    }

    return classNames
})
// 切换显示密码
const changeShowPassword = () => {
    type.value = type.value === 'password' ? 'text' : 'password'
}

</script>

<script lang="ts">
export default {
    inheritAttrs: false
}
</script>
<style>
input[type="password"]::-ms-reveal {
    display: none
}
</style>
