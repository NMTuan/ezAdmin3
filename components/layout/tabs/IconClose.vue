<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-11 20:41:11
 * @LastEditTime: 2022-07-12 15:01:21
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\tabs\IconClose.vue
-->
<template>
    <div v-if="routeName !== 'index'" @click.prevent="handleClick()" class="absolute top-0 right-0 rounded-bl transition-all op-0 cursor-pointer
                 group-hover:op-100 
                hover:bg-red-500 hover:rotate-180 hover:text-white hover:rounded-full
                ">
        <div class="text-xs i-ri-close-line">
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
