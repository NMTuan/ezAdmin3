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
        <div class="flex">
            <pre class="flex-1">{{ $pages }}</pre>
            <div class="flex-1">
                <LayoutMenu />
            </div>
        </div>

    </main>
</template>
<script setup>
</script>
