<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-13 10:22:06
 * @LastEditTime: 2022-07-19 17:43:43
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\Input.vue
-->
<template>
    <LayoutContainer>
        <h4>clearStyle</h4>
        <div class="flex">
            <div class="flex-1">
                <p>input</p>
                <form>
                    <MyInput clearStyle v-model='value' />
                    <MyInput clearStyle v-model='value' type="password" />
                    <MyInput clearStyle v-model='value' type="password" show-password />
                </form>
            </div>
            <div class="flex-1">
                <p>textarea</p>
                <MyInput clearStyle type="textarea" v-model='value' />
            </div>
        </div>
        <h4>size</h4>
        <div class="flex">
            <div class="flex-1">
                <p>input</p>
                <MyInput size="xs" placeholder="size=xs" v-model='value' />
                <MyInput size="sm" placeholder="size=sm" v-model='value' />
                <MyInput size="md" placeholder="size=md (default)" v-model='value' />
                <MyInput size="lg" placeholder="size=lg" v-model='value' />
            </div>
            <div class="flex-1">
                <p>textarea</p>
                <MyInput type="textarea" size="xs" placeholder="size=xs" v-model='value' />
                <MyInput type="textarea" size="sm" placeholder="size=sm" v-model='value' />
                <MyInput type="textarea" size="md" placeholder="size=md (default)" v-model='value' />
                <MyInput type="textarea" size="lg" placeholder="size=lg" v-model='value' />
            </div>
        </div>
        <h4>border</h4>
        <div class="flex">
            <div class="flex-1">
                <p>input</p>
                <MyInput v-model='value' />
                <MyInput border="primary" placeholder="border=primary" v-model='value' />
                <MyInput border="success" placeholder="border=success" v-model='value' />
                <MyInput border="warning" placeholder="border=warning" v-model='value' />
                <MyInput border="danger" placeholder="border=danger" v-model='value' />
                <MyInput border="info" placeholder="border=info" v-model='value' />
            </div>
            <div class="flex-1">
                <p>textarea</p>
                <MyInput type="textarea" v-model='value' />
                <MyInput type="textarea" border="primary" placeholder="border=primary" v-model='value' />
                <MyInput type="textarea" border="success" placeholder="border=success" v-model='value' />
                <MyInput type="textarea" border="warning" placeholder="border=warning" v-model='value' />
                <MyInput type="textarea" border="danger" placeholder="border=danger" v-model='value' />
                <MyInput type="textarea" border="info" placeholder="border=info" v-model='value' />
            </div>
        </div>

        <h4>round</h4>
        <div class="flex">

            <div class="flex-1">
                <p>input</p>
                <MyInput round="none" placeholder="round=none" v-model='value' />
                <MyInput round="xs" placeholder="round=xs" v-model='value' />
                <MyInput round="sm" placeholder="round=sm" v-model='value' />
                <MyInput round="md" placeholder="round=md" v-model='value' />
                <MyInput round="lg" placeholder="round=lg" v-model='value' />
                <MyInput round="full" placeholder="round=full" v-model='value' />
            </div>
            <div class="flex-1">
                <p>textarea</p>
                <MyInput type="textarea" round="none" placeholder="round=none" v-model='value' />
                <MyInput type="textarea" round="xs" placeholder="round=xs" v-model='value' />
                <MyInput type="textarea" round="sm" placeholder="round=sm" v-model='value' />
                <MyInput type="textarea" round="md" placeholder="round=md" v-model='value' />
                <MyInput type="textarea" round="lg" placeholder="round=lg" v-model='value' />
                <MyInput type="textarea" round="full" placeholder="round=full" v-model='value' />
            </div>
        </div>

        <h4>show-password</h4>
        <div class="flex">
            <div class="flex-1">
                <form>
                    <MyInput type="password" v-model="value" show-password placeholder="show-password" />
                </form>
            </div>
            <div class="flex-1">
                <form>
                    <MyInput type="password" v-model="value" />
                </form>
            </div>
        </div>
    </LayoutContainer>
</template>
<script setup>
const value = ref('')
</script>
<script>
export default {
    page: {
        name: "MyInput"
    },
}
</script>
<style scoped>
.myInput {
    margin: 2px;
}
</style>
