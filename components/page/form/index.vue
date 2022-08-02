<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-01 16:37:39
 * @LastEditTime: 2022-08-02 17:49:46
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\form\index.vue
-->
<template>
    <component :is="layoutComponent" :title="title" ref="layoutEl">
        <div>
            loading: {{ loading }}
        </div>
        <MyForm ref="formEl" v-model="modelValue" :fields="fields"></MyForm>
        <template #foot>
            <div class="p-4">
                <MyButton v-for="action in actions" @click="handleClick(action)">
                    {{ action.label }}
                </MyButton>
            </div>
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
watch(() => props.modelValue, (val) => {
    console.log('[watch]', typeof val, val)
    emits('update:modelValue', val)
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

    const res = await props.fetchApi(payload)
    if (unref(res.error) === null) {
        const data = unref(res.data).data
        props.fields.forEach((field) => {
            if (typeof data[field.field] !== 'undefined') {
                props.modelValue[field.field] = data[field.field]
            }
        })
    }
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
        loading.value = true
        if (typeof props.submitApi !== 'function') {
            return
        }
        const res = await props.submitApi(props.modelValue)
        if (unref(res.error) !== null) {
            console.log('[error]', unref(res.error).message)
            return
        }
        layoutEl.value.closeAndReload()
    })
}

// 取消表单(后退)
const cancel = () => {
    console.log(layoutEl)
    layoutEl.value.close()
}
</script>
