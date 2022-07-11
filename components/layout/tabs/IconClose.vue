<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 20:41:11
 * @LastEditTime: 2022-07-11 21:07:05
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\tabs\IconClose.vue
-->
<template>
    <div v-if="routeName !== 'index'" @click.prevent="handleClick()" class="absolute top-0 right-0 bg-red-400 rounded-full shadow transition-all op-0 cursor-pointer
                group-hover:-top-1 group-hover:-right-1 group-hover:op-100
                hover:bg-red-500 hover:scale-120 hover:rotate-180
                ">
        <div class="text-xs text-white i-ri-close-line">
        </div>
    </div>
</template>
<script setup>
const tabs = useTabs()
const props = defineProps({
    routeName: {
        type: String,
        default: ''
    }
})

const handleClick = () => {
    tabs.removeTab(props.routeName)
}
</script>
