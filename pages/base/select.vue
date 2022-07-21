<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-21 11:57:33
 * @LastEditTime: 2022-07-21 22:08:29
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\select.vue
-->
<template>
    <LayoutContainer>
        <div>
            selected: {{ selected }}
            <input type="text" v-model.number="selected">
        </div>
        <div class="flex">
            <MyInput size='xs' v-model="inputValue" />
            <MySelect size="xs" :options='options' v-model='selected' />
            {{ selected }}
        </div>
        <div class="flex">
            <MyInput size='sm' v-model="inputValue" />
            <MySelect size="sm" :options='options' v-model='selected' />
            {{ selected }}
        </div>
        <div class="flex">
            <MyInput size='md' v-model="inputValue" />
            <MySelect size="md" :options='options' v-model='selected' />
            {{ selected }}
        </div>
        <div class="flex">
            <MyInput size='lg' v-model="inputValue" />
            <MySelect size="lg" :options='options' v-model='selected' />
            {{ selected }}
        </div>
        <div class="flex">
            <MyInput size='md' v-model="inputValue" />
            <MySelect size="md" :options='options' v-model='multipleSelected' multiple />
            {{ multipleSelected }}
        </div>

    </LayoutContainer>
</template>
<script setup>
const inputValue = ref('测试内容啊')
const selected = ref(2)
const multipleSelected = ref([])
const options = ref([
    { label: '男', value: 1 },
    { label: '女', value: 2 },
    { label: '未知', value: 0 },
])
</script>
<script>
export default {
    page: {
        name: 'MySelect'
    }
}
</script>
