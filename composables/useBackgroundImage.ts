/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-07-09 20:52:50
 * @LastEditTime: 2022-07-10 15:25:03
 * @LastEditors: NMTuan
 * @Description: 生成马赛克背景图
 * @FilePath: \ezAdmin3\composables\useBackgroundImage.ts
 */
import trianglify from '@victorioberra/trianglify-browser'
export default (color = '#d4d4d4') => {
    const x = 50
    const pattern = trianglify({
        cellSize: Math.random() * x + x,
        width: 1920,
        height: 1080,
        variance: 32,
        xColors: ['#fafafa', '#fafafa', '#fafafa'],
        yColors: ['#fafafa', '#f5f5f5', color],
        seed: null
    }).toCanvas()
    const triangle = pattern.toDataURL('image/png')
    const backgroundImage = `url('${triangle}')`

    return backgroundImage
}
