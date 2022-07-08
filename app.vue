<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 19:44:31
 * @LastEditTime: 2022-07-06 14:42:07
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\app.vue
-->
<template>
    <main>
        <template v-if="auth.loaded">
            <NuxtLink :to="{ name: 'index' }">[index]</NuxtLink>
            <NuxtLink :to="{ name: 'login' }">[login]</NuxtLink>
            <NuxtLink :to="{ name: 'aa' }">[/aa]</NuxtLink>
            <NuxtLink :to="{ name: 'aa-aaa' }">[/aa/aaa]</NuxtLink>
            <NuxtLink :to="{ name: 'bb' }">[/bb]</NuxtLink>
            <NuxtLink :to="{ name: 'bb-id', params: { id: 1 } }">[/bb/1]</NuxtLink>
            <NuxtLink :to="{ name: 'bb-id', params: { id: 2 } }">[/bb/2]</NuxtLink>
            <hr>
            <NuxtPage />
            <div class="flex">
                <pre class="flex-1">{{ $pages }}</pre>
                <div class="flex-1">
                    <LayoutMenu />
                </div>
            </div>

        </template>
        <template v-else>
            loading
        </template>
    </main>
</template>
<script setup>
const auth = useAuth()
</script>
