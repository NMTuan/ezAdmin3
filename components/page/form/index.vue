<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-01 16:37:39
 * @LastEditTime: 2022-08-02 15:54:55
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
    }
})
const emits = defineEmits([
    'update:modelValue'
])
watch(() => props.modelValue, (val) => {
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
const cancel = () => {
    console.log(layoutEl)
    layoutEl.value.close()
}
</script>
