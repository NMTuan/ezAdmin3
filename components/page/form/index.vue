<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-01 16:37:39
 * @LastEditTime: 2022-08-08 16:39:39
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\form\index.vue
-->
<template>
    <component :is="layoutComponent" :title="title" ref="layoutEl">
        <div>
            loading: {{ loading }}
        </div>
        <MyForm ref="formEl" v-model="formData" :fields="fields"></MyForm>
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
    },
    submitApi: {
        type: Function,
        default: null
    },
    fetchApi: {
        type: Function,
        default: null
    },
    fetchPayload: {
        type: Function,
        default: null
    }
})
const emits = defineEmits([
    'update:modelValue'
])
// 这里用计算属性中转一下, 直接v-model:modelValue有问题.
const formData = computed({
    get: () => {
        return props.modelValue
    },
    set: (val) => {
        emits('update:modelValue', val)
    }
})

const formEl = ref(null)
const layoutEl = ref(null)
const loading = ref(false)
const layoutComponent = computed(() => {
    if (props.layout === 'dialog') {
        return resolveComponent('LayoutDialog')
    }
    return resolveComponent('LayoutDrawer')
})

// 拉取表单数据
if (typeof props.fetchApi === 'function') {
    let payload = {}
    if (typeof props.fetchPayload === 'function') {
        payload = Object.assign({}, payload, props.fetchPayload())
    }

    const { pending, data } = props.fetchApi(payload)
    watchEffect(() => {
        loading.value = pending.value
        if (data.value === null) {
            return
        }
        props.fields.forEach((field) => {
            if (typeof data.value.data[field.field] !== 'undefined') {
                props.modelValue[field.field] = data.value.data[field.field]
            }
        })
    })
}

// 点击操作按钮
const handleClick = (item) => {
    // 如果有自定义方法, 则执行自定义方法, 否则按action执行.
    if (typeof item.handleClick === 'function') {
        item.handleClick()
        return
    }
    const action = item.action || 'submit'
    console.log('action', action)
    switch (action) {
        case 'submit':
            submit()
            break
        case 'cancel':
            cancel()
            break
    }
}

// 提交表单
const submit = () => {
    formEl.value.validate(async (error, fields) => {
        if (error) {
            return
        }
        if (typeof props.submitApi !== 'function') {
            return
        }
        const { pending, data } = props.submitApi(props.modelValue)
        watchEffect(() => {
            loading.value = pending.value
        })
        watch(data, () => {
            if (data.value !== null) {
                layoutEl.value.closeAndReload()
            }
        })
    })
}

// 取消表单(后退)
const cancel = () => {
    console.log(layoutEl)
    layoutEl.value.close()
}
</script>
