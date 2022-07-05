<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 13:46:55
 * @LastEditTime: 2022-07-05 14:37:52
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\components\layout\menu\Index.vue
-->
<template>
    <div>
        menu
        <div v-for="page in $pages">
            <LayoutMenuItem v-if='!page.dynamicRoute' :page="page" />
        </div>
    </div>
</template>
