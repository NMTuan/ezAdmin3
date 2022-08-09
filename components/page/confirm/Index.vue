<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-04 17:54:46
 * @LastEditTime: 2022-08-09 11:16:30
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\page\confirm\Index.vue
-->
<template>
    <LayoutDialog ref="layoutEl" :title="title">
        loading: {{ loading }}
        <slot />
        <template #foot>
            <MyButton @click="submit">确定</MyButton>
            <MyButton type="link" @click="cancel">取消</MyButton>
        </template>
    </LayoutDialog>
</template>
<script setup lang="ts">
const route = useRoute()
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    submitApi: {
        type: Function,
        default: null
    },
    submitPayload: {
        type: Function,
        default: null
    }
})

const layoutEl = ref(null)
const loading = ref(false)

const submit = () => {
    if (typeof props.submitApi !== 'function') {
        return
    }
    let payload = {}
    if (typeof props.submitPayload === 'function') {
        payload = props.submitPayload()
    } else {
        payload = route.params
    }

    const { pending, data } = props.submitApi(payload)
    watchEffect(() => {
        loading.value = pending.value
    })

    watch(data, (val) => {
        if (val !== null) {
            layoutEl.value.closeAndReload()
        }
    })
}

const cancel = () => {
    layoutEl.value.close()
}
</script>
