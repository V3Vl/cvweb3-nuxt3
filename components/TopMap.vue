<script setup lang="ts">
import chinaJson from '@/assets/json/china.json'
import { chinaSelData } from '@/assets/json/seletedChina.js'
const { $eCharts } = useNuxtApp()
// const CNMapEl = ref<HTMLElement>()
// const CNMapEl = $eCharts.init

// 鼠标选中的数据 - 暂时any懒得写类型
const mapData = ref<any>([])
mapData.value = chinaSelData
// 地图数据配置 - 暂时any懒得写类型 - 文档：https://echarts.apache.org/zh/option.html#title
const mapOption = ref({})
// 初始化地图
const { clientType } = $(useClient())
const mapInit = () => {
  // 尺寸 - 这样写可能没有生效 - 待检查
  let myCharts = $eCharts.init(document.getElementById('CNMapEl'))
  window.onresize = myCharts.resize
  mapOption.value = {
    title: {
      text: '指南地图',
      subtext: '测试内容',
      left: 'left'
    },
    // 提示框
    tooltip: {
      left: 'auto',
      triggerOn: 'click', // 触发方式：click点击触发
      trigger: 'item',
      // 提示框样式
      extraCssText: `
        border: 1px solid #fff;
        width: ${clientType === 'MOBILE' ? '92vw' : '350px'};
        height: ${clientType === 'MOBILE' ? '50%' : '65vh'};
        white-space:pre-wrap;
      `,
      enterable: true, // 设置鼠标可进入提示框
      position: { right: 0, bottom: 0 },
      formatter({
        // 提示框样式自定义事件
        data // 对应下方 series配置的数据
      }) {
        if (!data) return
        const { name, region: list } = data
        // 外层div
        const containEl = document.createElement('div')
        containEl.classList.add('toolip')
        // 标题
        const titleEl = `<div class="toolip-title">${name}</div>`
        // 列表
        const ulEl = document.createElement('ul')
        ulEl.classList.add('toolip-ul')
        // 列表item
        if (list.length) {
          list.forEach((item: any) => {
            ulEl.innerHTML += `<li class="toolip-ul-li-name">${item.name}</li>`
            ulEl.innerHTML += `<li class="toolip-ul-li-address">A：${item.address_desc}</li>`
          })
        }
        containEl.innerHTML += titleEl
        containEl.appendChild(ulEl)
        // 样式
        const styleEl = document.createElement('style')
        styleEl.innerHTML = `
            *{
                margin: 0;
                padding: 0;
            }
            .toolip {
                z-index: 2;
                height: 100%;
                text-align: left;
                font-size: 16px;
                pointer-events: unset;
                opacity: 1;
            }
            .toolip-title {
                text-align: center;
                font-weight: 500;
                font-size: 1.5em;
                border-bottom: 1px solid #e3e3e3;
                padding-bottom: 10px;
                color: #333;
            }
            .toolip-ul {
                max-height: 100%;
                overflow-x:auto;
            }
            .toolip-ul-li-name {
                margin-top: 10px;
                font-weight: 500;
                padding: 5px 0;
                color: #666;
                word-break: break-all;
            }
            .toolip-ul-li-address {
                padding: 5px 0;
                font-size: 14px;
                border-bottom: 1px solid #e3e3e3;
                color: #999;
                word-break: break-all;
            }
        `
        containEl.appendChild(styleEl)
        return containEl
      }
    },
    // 视觉映射组件
    // visualMap: {
    //   min: 0,
    //   max: 100,
    //   text: ['High', 'Low'],
    //   realtime: false,
    //   calculable: false,
    //   inRange: {
    //     color: ['lightskyblue', 'yellow', 'orangered']
    //   }
    // },
    // 地图坐标系
    geo: {
      map: 'CHINA',
      top: '190',
      left: clientType === 'PC' ? '180' : 'center',
      roam: true,
      zoom: 1.7,
      scaleLimit: {
        min: 1.2,
        max: 7
      },
      label: {
        normal: {
          show: true, //是否显示地名
          textStyle: {
            color: 'rgba(0,0,0,0.5)' //地名颜色
          }
        }
      },
      itemStyle: {
        // 常态区块样式
        normal: {
          areaColor: '#bfddfa',
          borderColor: 'rgba(0, 0, 0, 0.3)'
        },
        // 鼠标悬停区块样式
        emphasis: {
          areaColor: '#46abdd',
          shadowOffsetX: 0, // 阴影水平方向上的偏移距离。
          shadowOffsetY: 0, // 阴影垂直方向上的偏移距离。
          shadowBlur: 10, // 图形阴影的模糊大小。
          shadowColor: 'rgba(0, 0, 0, 0.5)' // 阴影颜色
        }
      }
    },
    // 配置地图数据
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo'
      },
      {
        type: 'map',
        geoIndex: 0,
        data: mapData.value
      }
    ]
    // title: {
    //   text: '排行榜地图',
    //   subtext: '排行榜 - 地图',
    //   left: 'right'
    // },
  }

  myCharts.setOption(mapOption.value)
}

onMounted(() => {
  $eCharts.registerMap('CHINA', chinaJson)
  // const myCharts = $eCharts.init(CNMapEl.value!)
  // $eCharts.registerMap('CHINA', JSON.stringify(chinaJson), {})
  mapInit()
  // myCharts.setOption(mapOption.value)
})
</script>

<template>
  <div id="CNMapEl" ref="CNMapEl"></div>
</template>

<style lang="scss" scoped>
#CNMapEl {
  // width: 100%;
  @media screen and (min-width: 600px) {
    width: 100%;
    min-height: 70vh;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 70vh;
  }
}
</style>
