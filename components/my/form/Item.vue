<template>
    <div>
        <span v-if="isRequired" class="text-red-400">*</span>
        {{ item.label }}
        <component :is="componentName" :item="item" />
        <div v-if="validateError" class="text-red-400">
            {{ validateMsg }}
        </div>
    </div>
</template>
<script setup lang="ts">
import Schema from 'async-validator';
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
const data = inject('data')

// 组件名字
const componentName = computed(() => {
    if (props.item.type === 'select') {
        return resolveComponent('MyFormSelect')
    } else {
        return resolveComponent('MyFormInput')
    }
})

const validateError = ref(false)    // 验证失败
const validateMsg = ref('') // 失败消息

// 表单验证规则
const rules = computed(() => {
    return [].concat(props.item.rules || [])
})

// 是否必填
const isRequired = computed(() => {
    return rules.value.findIndex(rule => !!rule.required) >= 0
})

// 触发onBlur
provide('on:blur', () => {
    validate('blur')
})
provide('on:change', () => {
    validate('change')
})

// 表单验证
const validate = async (trigger, callback = (errorMsg, fields) => { }) => {
    // 找到当前触发类型下的所有验证规则
    let currentRules = []
    if (!trigger) {
        currentRules = rules.value
    } else {
        currentRules = rules.value.filter(rule => {
            if (typeof rule.trigger === 'undefined' && trigger === 'blur') {  // 设置默认值 
                return true
            }
            if (Array.isArray(rule.trigger)) {
                return rule.trigger.includes(trigger)
            } else {
                return rule.trigger === trigger
            }
        })
    }

    // 没有验证规则的直接回调
    if (!currentRules || currentRules.length === 0) {
        callback()
        return
    }

    // 表单验证
    const descriptor = currentRules.reduce((total, item) => {
        const tmp = Object.assign({}, item)
        delete tmp.trigger
        total.push(tmp)
        return total
    }, [])

    const validator = new Schema({ [props.item.field]: descriptor });

    validator.validate({
        [props.item.field]: data.value[props.item.field]
    }, { firstFields: true }, (errors, fields) => {
        validateError.value = !!errors
        validateMsg.value = errors?.[0].message || ''
        callback(validateMsg.value, fields)
    })

}

// 把当前组件加到父组件中. 用于表单提交的验证
const addField = inject('addField')
if (addField) {
    addField({ validate: validate })
}


</script>
