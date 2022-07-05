<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-05 19:44:31
 * @LastEditTime: 2022-07-05 21:29:56
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\app.vue
-->
<template>
    <main>
        <NuxtLink :to="{ name: 'index' }">[index]</NuxtLink>
        <NuxtLink :to="{ name: 'login' }">[login]</NuxtLink>
        <NuxtLink :to="{ name: 'aa' }">[/aa]</NuxtLink>
        <NuxtLink :to="{ name: 'aa-aaa' }">[/aa/aaa]</NuxtLink>
        <NuxtLink :to="{ name: 'bb' }">[/bb]</NuxtLink>
        <NuxtLink :to="{ name: 'bb-id', params: { id: 1 } }">[/bb/1]</NuxtLink>
        <NuxtLink :to="{ name: 'bb-id', params: { id: 2 } }">[/bb/2]</NuxtLink>
        <hr>
        <NuxtPage />
        {{ auth.authorizedPages }}
        <div class="flex">
            <pre class="flex-1">{{ $pages }}</pre>
            <div class="flex-1">
                <LayoutMenu />
            </div>
        </div>

    </main>
</template>
<script setup>
const auth = useAuth()
</script>
