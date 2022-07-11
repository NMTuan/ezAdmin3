<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-10 20:49:14
 * @LastEditTime: 2022-07-11 16:31:25
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\top\Index.vue
-->
<template>
    <div class="h-16 overflow-hidden">
        <div
            class="flex items-center fixed overflow-hidden left-64 right-0 h-16 bg-white py-4 px-3 border-b border-neutral-100 shadow-sm ">
            <LayoutTabs class="flex-1 overflow-hidden overflow-x-scroll" />
            <div class="flex-shrink-0 ml-2">
                {{ auth.me?.email }}
                <button @click="logout">登出</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const auth = useAuth()

const logout = () => {
    auth.logout()
}

</script>
