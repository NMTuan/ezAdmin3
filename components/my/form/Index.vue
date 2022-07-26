<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-26 09:32:42
 * @LastEditTime: 2022-07-26 10:43:27
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\form\Index.vue
-->
<template>
    <div>

        <template v-for="field in fields" :is="componentName(field.type)">
            {{ field.label }}
            <template v-if="field.type === 'select'">
                <MySelect :options="field.options" v-model="data[field.field]"></MySelect>
            </template>
            <template v-else>
                <MyInput v-model="data[field.field]"></MyInput>
            </template>
        </template>
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

</script>
