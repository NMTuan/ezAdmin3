<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-12 15:40:32
 * @LastEditTime: 2022-07-12 17:56:05
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\button.vue
-->
<template>
    <LayoutContainer>
        <h4>无样式 clearStyle</h4>
        <div>
            <MyButton clearStyle>默认按钮</MyButton>
        </div>
        <h4>类型 type</h4>
        <p>
            <MyButton>默认按钮</MyButton>
            <MyButton type="primary">type = primary</MyButton>
            <MyButton type="success">type = success</MyButton>
            <MyButton type="info">type = info</MyButton>
            <MyButton type="warning">type = warning</MyButton>
            <MyButton type="danger">type = danger</MyButton>
            <MyButton type="link">type = link</MyButton>
        </p>
        <h4>边框 outline</h4>
        <p>
            <MyButton>默认按钮</MyButton>
            <MyButton outline type="primary">type = primary</MyButton>
            <MyButton outline type="success">type = success</MyButton>
            <MyButton outline type="info">type = info</MyButton>
            <MyButton outline type="warning">type = warning</MyButton>
            <MyButton outline type="danger">type = danger</MyButton>
            <MyButton outline type="link">type = link</MyButton>
        </p>
        <h4>禁用 disabled</h4>
        <p>
            <MyButton disabled>默认按钮</MyButton>
            <MyButton disabled type="primary">type = primary</MyButton>
            <MyButton disabled type="success">type = success</MyButton>
            <MyButton disabled type="info">type = info</MyButton>
            <MyButton disabled type="warning">type = warning</MyButton>
            <MyButton disabled type="danger">type = danger</MyButton>
            <MyButton disabled type="link">type = link</MyButton>
        </p>
        <p>
            <MyButton disabled>默认按钮</MyButton>
            <MyButton disabled outline type="primary">type = primary</MyButton>
            <MyButton disabled outline type="success">type = success</MyButton>
            <MyButton disabled outline type="info">type = info</MyButton>
            <MyButton disabled outline type="warning">type = warning</MyButton>
            <MyButton disabled outline type="danger">type = danger</MyButton>
            <MyButton disabled outline type="link">type = link</MyButton>
        </p>
        <h4>尺寸 size</h4>
        <p>
            <MyButton size="lg">size = lg</MyButton>
            <MyButton>默认按钮</MyButton>
            <MyButton size="sm">size = sm</MyButton>
            <MyButton size="xs">size = xs</MyButton>
            <MyButton size="lg" round="full">size = lg</MyButton>
            <MyButton round="full">默认按钮</MyButton>
            <MyButton size="sm" round="full">size = sm</MyButton>
            <MyButton size="xs" round="full">size = xs</MyButton>
        </p>
        <h4>边角 round</h4>
        <p>
            <MyButton round="angle">round=angle</MyButton>
            <MyButton round="sm">round=sm</MyButton>
            <MyButton>默认</MyButton>
            <MyButton round="md">round=md</MyButton>
            <MyButton round="lg">round=lg</MyButton>
            <MyButton round="full">round=full</MyButton>
        </p>

        <h4>属性</h4>
        <table class="w-full">
            <thead>
                <tr>
                    <th>属性</th>
                    <th>描述</th>
                    <th>类型</th>
                    <th>可选值</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tr>
                <td>clearStyle</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>type</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>size</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>round</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>disabled</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </LayoutContainer>
</template>
<script setup>

</script>
<script>
export default {
    page: {
        name: 'MyButton 按钮'
    }
}
</script>
<style scoped>
.myButton {
    margin: 0 2px;
}
</style>
