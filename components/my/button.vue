<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-08 15:42:41
 * @LastEditTime: 2022-07-08 17:50:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\button.vue
-->
<template>
    <button :class="useClass">
        <slot />
    </button>
</template>
<script setup lang="ts">
const props = defineProps({
    clearStyle: {   // 清除预设样式
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'default',
        validator(value: string) {
            return [
                'default',
                'primary',
                'secondary',
                'success',
                'warning',
                'danger',
                'info',
            ].includes(value)
        }
    },
    size: {
        type: String,
        default: 'default',
        validator(value: string) {
            return [
                'default',
                'lg',
                'sm',
                'xs',
            ].includes(value)
        }

    },
    disabled: {
        type: Boolean,
        default: false
    }

})

const useClass = ref([])

watch(() => props.type, (newVal) => {
    console.log('watch', newVal)
    switch (newVal) {
        case 'primary':
            useClass.value.push('bg-sky-400')
            break;
        case 'secondary':
            useClass.value.push('bg-blue-400')
            break;
        case 'success':
            useClass.value.push('bg-green-400')
            break;
        case 'warning':
            useClass.value.push('bg-yellow-400')
            break;
        case 'danger':
            useClass.value.push('bg-red-400')
            break;
        case 'info':
            useClass.value.push('bg-gray-400')
            break;
        case 'default':
        default:
            useClass.value.push('bg-white border border-gray-400')
    }
})

if (!props.clearStyle) {
    // switch (props.type) {
    //     case 'primary':
    //         useClass.value.push('bg-sky-400')
    //         break;
    //     case 'secondary':
    //         useClass.value.push('bg-blue-400')
    //         break;
    //     case 'success':
    //         useClass.value.push('bg-green-400')
    //         break;
    //     case 'warning':
    //         useClass.value.push('bg-yellow-400')
    //         break;
    //     case 'danger':
    //         useClass.value.push('bg-red-400')
    //         break;
    //     case 'info':
    //         useClass.value.push('bg-green-400')
    //         break;
    //     case 'default':
    //     default:
    //         useClass.value.push('bg-white border border-gray-400')
    // }
    switch (props.size) {
        case 'xs':
            useClass.value.push('text-xs')
            break;
        case 'sm':
            useClass.value.push('text-sm')
            break;
        case 'lg':
            useClass.value.push('text-lg')
            break;
        case 'default':
            // default:
            useClass.value.push('text-base')
            break;
    }
}

</script>
