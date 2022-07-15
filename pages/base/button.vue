<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-12 15:40:32
 * @LastEditTime: 2022-07-13 15:00:52
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \ezAdmin3\pages\base\button.vue
-->
<template>
    <LayoutContainer>
        <h4>clearStyle</h4>
        <div>
            <MyButton clearStyle>button</MyButton>
        </div>
        <h4>type</h4>
        <p>
            <MyButton>button</MyButton>
            <MyButton type="primary">type = primary</MyButton>
            <MyButton type="success">type = success</MyButton>
            <MyButton type="info">type = info</MyButton>
            <MyButton type="warning">type = warning</MyButton>
            <MyButton type="danger">type = danger</MyButton>
            <MyButton type="link">type = link</MyButton>
        </p>
        <h4>border</h4>
        <p>
            <MyButton>button</MyButton>
            <MyButton border type="primary">type = primary</MyButton>
            <MyButton border type="success">type = success</MyButton>
            <MyButton border type="info">type = info</MyButton>
            <MyButton border type="warning">type = warning</MyButton>
            <MyButton border type="danger">type = danger</MyButton>
            <MyButton border type="link">type = link</MyButton>
        </p>
        <h4>disabled</h4>
        <p>
            <MyButton disabled>button</MyButton>
            <MyButton disabled type="primary">type = primary</MyButton>
            <MyButton disabled type="success">type = success</MyButton>
            <MyButton disabled type="info">type = info</MyButton>
            <MyButton disabled type="warning">type = warning</MyButton>
            <MyButton disabled type="danger">type = danger</MyButton>
            <MyButton disabled type="link">type = link</MyButton>
        </p>
        <p>
            <MyButton disabled>button</MyButton>
            <MyButton disabled border type="primary">type = primary</MyButton>
            <MyButton disabled border type="success">type = success</MyButton>
            <MyButton disabled border type="info">type = info</MyButton>
            <MyButton disabled border type="warning">type = warning</MyButton>
            <MyButton disabled border type="danger">type = danger</MyButton>
            <MyButton disabled border type="link">type = link</MyButton>
        </p>
        <h4>size</h4>
        <p>
            <MyButton size="xs">size = xs</MyButton>
            <MyButton size="sm">size = sm</MyButton>
            <MyButton>size = md (default)</MyButton>
            <MyButton size="lg">size = lg</MyButton>
        </p>
        <h4>round</h4>
        <p>
            <MyButton round="none">round=none</MyButton>
            <MyButton round="xs">round=xs</MyButton>
            <MyButton>round=sm (default)</MyButton>
            <MyButton round="md">round=md</MyButton>
            <MyButton round="lg">round=lg</MyButton>
            <MyButton round="full">round=full</MyButton>
        </p>

        <h3>Attributes</h3>
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
        name: 'MyButton'
    }
}
</script>
<style scoped>
.myButton {
    margin: 0 2px;
}
</style>
