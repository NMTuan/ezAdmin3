<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-18 09:36:18
 * @LastEditTime: 2022-07-18 14:59:51
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\table.vue
-->
<template>
    <LayoutContainer>
        <div class='py-2'>
            [
            <label><input type="checkbox" v-model="border" /> border</label>
            ]
            [
            size:
            <label><input type="radio" name="size" value="md" v-model="size"> md </label>
            <label><input type="radio" name="size" value="sm" v-model="size"> sm </label>
            <label><input type="radio" name="size" value="xs" v-model="size"> xs </label>
            ]
        </div>
        <MyTable :fields='fields' :data='data' :border="border" :size="size" />
    </LayoutContainer>
</template>
<script setup lang="ts">
// https://www.tiobe.com/tiobe-index/
const fields = [
    { label: 'Jul 2022', field: 'thisYear' },
    { label: 'Jul 2021', field: 'lastYear' },
    { label: 'Change', field: 'change' },
    { label: 'Programming Language', field: 'language' },
    { label: 'Ratings', field: 'rating' },
    { label: 'Change', field: 'changeRate' },
]
const data = [
    { thisYear: '1', lastYear: '3', change: 'up', language: 'Python', rating: '13.44%', changeRate: '+2.48%' },
    { thisYear: '2', lastYear: '1', change: '', language: 'C', rating: '13.13%', changeRate: '+1.50%' },
    { thisYear: '3', lastYear: '2', change: '', language: 'Java', rating: '11.59%', changeRate: '+0.40%' },
    { thisYear: '4', lastYear: '4', change: '', language: 'C++', rating: '10.00%', changeRate: '+1.98%' },
    { thisYear: '5', lastYear: '5', change: '', language: 'C#', rating: '5.65%', changeRate: '+0.82%' },
    { thisYear: '6', lastYear: '6', change: '', language: 'Visual Basic', rating: '4.97%', changeRate: '+0.47%' },
    { thisYear: '7', lastYear: '7', change: '', language: 'JavaScript', rating: '1.78%', changeRate: '-0.93%' },
    { thisYear: '8', lastYear: '9', change: 'up', language: 'Assembly language', rating: '1.65%', changeRate: '-0.76%' },
    { thisYear: '9', lastYear: '10', change: 'up', language: 'SQL', rating: '1.64%', changeRate: '+0.11%' },
    { thisYear: '10', lastYear: '16', change: 'up', language: 'Swift', rating: '1.27%', changeRate: '+0.20%' },
]
const border = ref(false)
const size = ref('md')
</script>
<script lang="ts">
export default {
    page: {
        name: 'MyTable'
    }
}
</script>
