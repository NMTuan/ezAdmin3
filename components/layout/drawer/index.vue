<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-19 16:55:29
 * @LastEditTime: 2022-07-19 16:59:09
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\drawer\index.vue
-->
<template>
    <div>
        Drawer
        <slot></slot>
        <div class="w-full h-full fixed z-10 inset-0 bg-neutral-400/50">
            mask
        </div>
    </div>
</template>
