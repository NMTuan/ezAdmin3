<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-19 16:55:29
 * @LastEditTime: 2022-07-20 17:22:33
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\drawer\index.vue
-->
<template>
    <div>
        <teleport to="#drawer">
            <transition name="fade" v-if="mask">
                <div v-if="show" class="fixed z-10 inset-0 w-full h-full  bg-neutral-200/50" @click="clickMask">
                </div>
            </transition>
            <transition :name="direction">
                <div v-if="show" class="flex flex-col overflow-hidden bg-white absolute z-20" :class="containerClass"
                    :style="containerStyle">
                    <div v-if="title !== '' || closeBtn"
                        class="flex flex-shrink-0 items-center bg-neutral-100 h-16 overflow-hidden  px-4 leading-none text-lg font-bold">
                        <div class="flex-1 truncate">
                            {{ title }}
                        </div>
                        <div class="cursor-pointer" @click="close" v-if="closeBtn">
                            <div class="i-ri-close-fill text-xl"></div>
                        </div>
                    </div>
                    <div class="flex-1 overflow-hidden">
                        <Simplebar>
                            <slot></slot>
                        </Simplebar>
                    </div>
                </div>
            </transition>
        </teleport>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const props = defineProps({
    direction: {   //方向 
        type: String,
        default: 'rtl',
        validator(value: string) {
            return [
                'rtl',
                'ltr',
                'ttb',
                'btt',
            ].includes(value)
        }
    },
    size: { // 尺寸
        type: String,
        default: '30%',
        validator(value: string) {
            return /^.*[%|px]$/.test(value)
        }
    },
    mask: { // 遮罩
        type: Boolean,
        default: true
    },
    closeOnClickMask: { // 点击遮罩关闭抽屉
        type: Boolean,
        default: true
    },
    closeBtn: { // 显示关闭按钮
        type: Boolean,
        default: true
    },
    title: {    // 标题
        type: String,
        default: ''
    }
})

const show = ref(false)
onMounted(() => {
    show.value = true
})

// 容器样式
const containerClass = computed(() => {
    let className = []

    switch (props.direction) {
        case 'ltr':
            className.push('left-0 top-0 bottom-0 border-r')
            break
        case 'rtl':
            className.push('top-0 right-0 bottom-0 border-l')
            break
        case 'ttb':
            className.push('top-0 right-0 left-0 border-b')
            break
        case 'btt':
            className.push('right-0 bottom-0 left-0 border-t')
            break
    }
    className.push('border-neutral-100 shadow')
    return className
})
const containerStyle = computed(() => {
    let styles = []
    if (['rtl', 'ltr'].includes(props.direction)) {
        styles.push(`width: ${props.size}; height: 100%;`)
    } else {
        styles.push(`width: 100%; height: ${props.size}`)
    }

    return styles
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

.rtl-enter-active,
.ltr-enter-active,
.ttb-enter-active,
.btt-enter-active {
    transition: all 0.2s ease-out;
}

.rtl-leave-active,
.ltr-leave-active,
.ttb-leave-active,
.btt-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.rtl-enter-from,
.rtl-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.ltr-enter-from,
.ltr-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.ttb-enter-from,
.ttb-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.btt-enter-from,
.btt-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>
