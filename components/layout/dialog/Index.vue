<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-03 11:32:14
 * @LastEditTime: 2022-08-05 10:45:54
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\dialog\Index.vue
-->
<template>
    <div>
        <teleport to="#dialog">
            remove dialog
            <transition name="fade" v-if="mask">
                <div v-if="show" class="fixed z-10 inset-0 w-full h-full  bg-neutral-200/50" @click="clickMask">
                </div>
            </transition>
            <transition name="dialog">
                <div v-if="show" class="absolute inset-0 z-20 left-0 top-0 overflow-hidden pointer-events-none">
                    <Simplebar>
                        <div class="w-50% mx-auto my-12vh bg-white overflow-hidden pointer-events-auto "
                            :class="containerClass">
                            <div v-if="title !== '' || closeBtn"
                                class="flex flex-shrink-0 items-center bg-neutral-100 h-16 overflow-hidden  px-4 leading-none text-lg font-bold">
                                <div class="flex-1 truncate">
                                    {{ title }}
                                </div>
                                <div class="cursor-pointer" @click="close" v-if="closeBtn">
                                    <div class="i-ri-close-fill text-xl"></div>
                                </div>
                            </div>
                            <div class="p-4">
                                <slot></slot>
                            </div>
                            <div v-if="$slots.foot" class="flex flex-row-reverse p-4">
                                <slot name="foot"></slot>
                            </div>
                        </div>
                    </Simplebar>
                </div>
            </transition>
        </teleport>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()

const props = defineProps({
    mask: { // 遮罩
        type: Boolean,
        default: true
    },
    closeOnClickMask: { // 点击遮罩关闭抽屉
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    },
    closeBtn: { // 显示关闭按钮
        type: Boolean,
        default: true
    },



})
const show = ref(false)
onMounted(() => {
    show.value = true
})

// 容器样式
const containerClass = computed(() => {
    let className = []
    className.push('border-neutral-100  rounded shadow')
    return className
})


// 点击遮罩
const clickMask = () => {
    if (props.closeOnClickMask) {
        close()
    }
}
// 关闭抽屉
const close = (params = {}) => {
    const routeName = route.matched[route.matched.length - 2].name
    show.value = false
    setTimeout(() => {
        // router.back()
        navigateTo({
            name: routeName,
            params: {
                ...params
            },
            replace: true
        })
    }, 200)
}

// 关闭抽屉并刷新数据
const closeAndReload = () => {
    close({
        reload: true
    })
}

// 暴露方法
defineExpose({
    close,
    closeAndReload
})




</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.dialog-enter-active {
    transition: all 0.2s ease-out;
}

.dialog-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.dialog-enter-from,
.dialog-leave-to {
    transform: translateY(-10%);
    opacity: 0;
}
</style>
