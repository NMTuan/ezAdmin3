<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 09:35:22
 * @LastEditTime: 2022-08-02 16:27:14
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\my\table\Index.vue
-->
<template>
    <div>
        <table class="w-full border-collapse">
            <thead>
                <tr>
                    <th v-for="field in props.fields" :class="thClass">
                        <div :class="cellClass">{{ field.label }}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr>
                    <td v-for="(field, index) in props.fields" :class="tdClass">
                        <MyButton :size="props.size || 'md'" v-if="index === 2">123</MyButton>
                        <div v-else :class="cellClass">
                            111
                        </div>
                    </td>
                </tr> -->
                <tr v-for="row in props.data">
                    <td v-for="field in props.fields" :class="tdClass">
                        <div :class="cellClass">
                            <template v-if="field.type === 'action'">
                                <MyTableCellAction :field="field" :row="row" />
                            </template>
                            <template v-else>
                                {{ row[field.field] }}
                            </template>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    clearStyle: {   // 清除预设样式
        type: Boolean,
        default: false
    },
    size: { // 尺寸
        type: String,
        default: 'md',
        validator(value: string) {
            return [
                'xs',
                'sm',
                'md',
                'lg',
            ].includes(value)
        }
    },
    border: { // 边框, 默认只一条横线
        type: Boolean,
        default: false
    },
    fields: {   // 表头(字段)
        type: Array,
        default: () => []
    },
    data: { // 行数据
        type: Array,
        default: () => []
    }
})

const thClass = computed(() => {
    let className: string[] = []

    if (props.clearStyle) {
        return className
    }

    if (props.border) {
        className.push('border')

    } else {
        className.push('border-b')
    }
    className.push('border-b border-neutral-100')
    className.push('p-1')
    className.push('bg-neutral-50')
    className.push('text-left')

    return className

})

const tdClass = computed(() => {
    let className: string[] = []

    if (props.clearStyle) {
        return className
    }

    if (props.border) {
        className.push('border')

    } else {
        className.push('border-b')
    }
    className.push('border-b border-neutral-100')

    className.push('p-1')

    return className
})

const cellClass = computed(() => {
    let className: string[] = []

    if (props.clearStyle) {
        return className
    }


    //size
    if (props.size === 'xs') {
        className.push('text-xs px-2 py-1.5')

    } else if (props.size === 'sm') {
        className.push('text-sm px-3 py-2')

    } else if (props.size === 'lg') {

    } else {
        className.push('text-base px-4 py-2.5')
    }

    return className
})
</script>
