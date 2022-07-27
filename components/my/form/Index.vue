<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-26 09:32:42
 * @LastEditTime: 2022-07-27 11:47:08
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\form\Index.vue
-->
<template>
    <div>
        <MyFormItem :item="field" v-for="field in fields" />
        <p>组件内的值</p>
        <pre>[data]: {{ data }}</pre>
        <p>要更新到组件外</p>
        <pre>[formData]: {{ formData }}</pre>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    formData: {
        type: Object,
        default: () => ({})
    },
    fields: {
        type: Array,
        default: () => []
    }
})
const emits = defineEmits([
    'update:formData'
])

const data = ref({})    // 组件内的表单数据集
provide('data', data)

// 表单数据初始化
data.value = props.fields.reduce((total, item) => {
    total[item.field] = props.formData[item.field] || ''
    return total
}, {})

// 监听组件外的变动. 更新到组件内
watch(props.formData, (val) => {
    console.log(val)
    data.value = Object.assign(data.value, val)
})

// 监听组件内的变动, 更新到组件外
watch(data, (val) => {
    emits('update:formData', val)
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

defineExpose({
    validate
})

</script>
