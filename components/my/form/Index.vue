<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-26 09:32:42
 * @LastEditTime: 2022-07-27 17:29:21
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\form\Index.vue
-->
<template>
    <div class="myForm" :class="useClass">
        <MyFormItem :item="field" v-for="field in fields" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({})
    },
    fields: {
        type: Array,
        default: () => []
    },
    inline: {
        type: Boolean,
        default: false
    },
    labelPosition: {
        type: String,
        default: 'top'
    },
    labelWidth: {
        type: String,
        default: '120px'
    }
})
provide('formProps', props) // 把整个配置项都传下去

const emits = defineEmits([
    'update:modelValue'
])

const data = ref({})    // 组件内的表单数据集
provide('data', data)

// 表单数据初始化
data.value = props.fields.reduce((total, item) => {
    total[item.field] = props.modelValue[item.field] || ''
    return total
}, {})

// 监听组件外的变动. 更新到组件内
watch(props.modelValue, (val) => {
    console.log(val)
    data.value = Object.assign(data.value, val)
})

// 监听组件内的变动, 更新到组件外
watch(data, (val) => {
    emits('update:modelValue', val)
}, {
    immediate: true
})

const validates = []   // 表单项的验证方法.
provide('addField', (field) => {
    if (field) {
        validates.push(field)
    }
})

// 整体表单验证的方法.
const validate = (callback = (error, fields) => { }) => {
    let error = false
    let errorFields = {}
    for (let i = 0; i < validates.length; i++) {
        validates[i].validate('', (errorMsg, fields) => {
            if (errorMsg) {
                error = true
                errorFields = Object.assign(errorFields, fields)
            }
        })
    }
    callback(error, errorFields)
}

const useClass = computed(() => {
    const className = []

    if (props.inline) {
        className.push('flex flex-wrap')
    }
    return className
})

// 暴露方法
defineExpose({
    validate
})



</script>
