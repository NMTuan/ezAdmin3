<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-01 16:37:39
 * @LastEditTime: 2022-08-01 17:59:18
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\form\index.vue
-->
<template>
    <component :is="layoutComponent" :title="title">
        <MyForm ref="formEl" v-model="modelValue" :fields="fields"></MyForm>
        <pre>modelValue: {{ modelValue }}</pre>
        <p v-for="i in 30">{{ i }}</p>
        <template #foot>
            <MyButton v-for="action in actions" @click="handleClick(action)">
                {{ action.label }}
            </MyButton>
        </template>
    </component>
</template>
<script setup>


const props = defineProps({
    layout: {
        type: String,
        default: 'drawer'
    },
    title: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Object,
        default: () => ({})
    },
    fields: {
        type: Array,
        default: () => ([])
    },
    actions: {
        type: Array,
        default: () => ([])
    }
})
const emits = defineEmits([
    'update:modelValue'
])
watch(() => props.modelValue, (val) => {
    emits('update:modelValue', val)
})
const formEl = ref(null)
const layoutComponent = computed(() => {
    if (props.layout === 'dialog') {
        return resolveComponent('LayoutDialog')
    }
    return resolveComponent('LayoutDrawer')
})

const handleClick = (item) => {
    if (typeof item.handleClick === 'function') {
        item.handleClick()
        return
    }
    const action = item.action || 'submit'
    switch (action) {
        case 'submit':
            submit()
            break
        case 'reset':
            break
        case 'cancel':
            break
    }
}

const submit = () => {
    formEl.value.validate((error, fields) => {
        if (error) {
            return
        }
        console.log('submit')
    })
}
const reset = () => { }
const cancel = () => { }
</script>
