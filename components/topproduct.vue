<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useMessage, useDialog } from 'naive-ui'
const message = useMessage()
const dialog = useDialog()
interface ISrcListType {
  src: string
  altContent: string
  id?: number
  fallbackSrc?: string
  jumpToUrl?: string
}

interface IMenuListTtype {
  id: number
  title: string
  rankMenuContentPC?: Array<IMenuContentType>
}
interface IMenuContentType {
  eId: string
  title: string
  img: string
}
const srcList = ref<Array<ISrcListType>>([])
const toolList = ref<Array<ISrcListType>>([])
const rankListPC = ref<Array<ISrcListType>>([])
const rankListH5 = ref<Array<ISrcListType>>([])
const tapRankListMenuPC = ref<Array<IMenuListTtype>>([])
const rankMenuPC = ref<any>()
// const { clientType } = $(useClient())
rankListPC.value = [
  { src: '', id: 5, jumpToUrl: '/rank/SchoolRank', altContent: '运动 / 户外' },
  { src: '', id: 1, jumpToUrl: '/rank/ShopRank', altContent: '电子 / 音像' },
  { src: '', id: 2, jumpToUrl: '/rank/ShopRank', altContent: '家居 / 家电' },
  { src: '', id: 3, jumpToUrl: '/rank/CarRank', altContent: '游戏 / 娱乐' },
  { src: '', id: 4, jumpToUrl: '/rank/CarRank', altContent: '装修 / 建材' },
  { src: '', id: 6, jumpToUrl: '/rank/HumanRank', altContent: '网课 / 书籍' },
  { src: '', id: 7, jumpToUrl: '/rank/CanteenRank', altContent: '选车 / 出行' },
  { src: '', id: 8, jumpToUrl: '/rank/CanteenRank', altContent: '鞋服 / 饰品' },
  { src: '', id: 9, jumpToUrl: '/rank/PowerRank', altContent: '城市 / 教育' },
  { src: '', id: 10, jumpToUrl: '/rank/TravelRank', altContent: '旅游 / 景点' }
]
rankListH5.value = [
  { src: '', jumpToUrl: '/rank/ShopRank', altContent: '商品' },
  { src: '', jumpToUrl: '/rank/CarRank', altContent: '分类' },
  { src: '', jumpToUrl: '/rank/TravelRank', altContent: '游戏' },
  { src: '', jumpToUrl: '/rank/SchoolRank', altContent: '教育' },
  { src: '', jumpToUrl: '/rank/CanteenRank', altContent: '名人' },
  { src: '', jumpToUrl: '/rank/HumanRank', altContent: '旅游' },
  { src: '', jumpToUrl: '/rank/PowerRank', altContent: '书籍' },
  { src: '', jumpToUrl: '/rank/PowerRank', altContent: '汽车' }
]
toolList.value = [
  { src: '', jumpToUrl: '/tooler/Fitmentdiy', altContent: '装修预算清单' },
  { src: '', jumpToUrl: '/tooler/PCdiy', altContent: '自助电脑配置清单' },
  { src: '', jumpToUrl: '', altContent: '旅游规划路书' },
  { src: '', jumpToUrl: '', altContent: '心愿清单' }
]
srcList.value = [
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880x1620_10.jpg',
    altContent: '鞋2'
  },
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880x1620_28.jpg',
    altContent: '眼镜'
  },
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_THEMES_RGB_CROPPED_2880X1620_38.jpg',
    altContent: '围巾'
  },
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880X1620_33.jpg',
    altContent: '女包'
  }
]
rankMenuPC.value = [
  [
    {
      id: 1,
      title: '热门分类',
      rankMenuContentPC: [
        { eId: 'hots', img: '', title: '钓鱼-纺车轮' },
        { eId: 'hots', img: '', title: '钓鱼-路亚竿' },
        { eId: 'hots', img: '', title: '滑雪-单板' },
        { eId: 'hots', img: '', title: '滑雪-雪服' }
      ]
    },
    {
      id: 1,
      title: '钓鱼',
      rankMenuContentPC: [
        { eId: 'hots', img: '', title: '纺车轮' },
        { eId: 'hots', img: '', title: '鼓轮' },
        { eId: 'hots', img: '', title: '水滴轮' },
        { eId: 'hots', img: '', title: '路亚竿' },
        { eId: 'hots', img: '', title: '海竿' },
        { eId: 'hots', img: '', title: '船钓杆' },
        { eId: 'hots', img: '', title: '传统手竿' },
        { eId: 'hots', img: '', title: '鱼线' },
        { eId: 'hots', img: '', title: '拟饵' },
        { eId: 'hots', img: '', title: '钓鱼艇' },
        { eId: 'hots', img: '', title: '路亚艇' },
        { eId: 'hots', img: '', title: '钓鱼椅' }
      ]
    },
    {
      id: 1,
      title: '露营',
      rankMenuContentPC: [
        { eId: 'hots', img: '', title: '帐篷' },
        { eId: 'hots', img: '', title: '收纳箱' },
        { eId: 'hots', img: '', title: '户外椅' },
        { eId: 'hots', img: '', title: '折叠桌' },
        { eId: 'hots', img: '', title: '旅行拖车' },
        { eId: 'hots', img: '', title: '烧烤炉' },
        { eId: 'hots', img: '', title: '卡式炉' }
      ]
    },
    {
      id: 1,
      title: '自行车',
      rankMenuContentPC: [
        { eId: 'hots', img: '', title: '山地车' },
        { eId: 'hots', img: '', title: '公路车' },
        { eId: 'hots', img: '', title: '软尾山地车' },
        { eId: 'hots', img: '', title: '瓜车' },
        { eId: 'hots', img: '', title: '旅行车' },
        { eId: 'hots', img: '', title: '头盔' },
        { eId: 'hots', img: '', title: '护膝' },
        { eId: 'hots', img: '', title: '骑行服' },
        { eId: 'hots', img: '', title: '骑行表' },
        { eId: 'hots', img: '', title: '车架' },
        { eId: 'hots', img: '', title: '刹车' },
        { eId: 'hots', img: '', title: '配件1' },
        { eId: 'hots', img: '', title: '配件2' },
        { eId: 'hots', img: '', title: '配件3' },
        { eId: 'hots', img: '', title: '配件4' }
      ]
    },
    {
      id: 1,
      title: '滑雪',
      rankMenuContentPC: [
        { eId: 'hots', img: '', title: '单板' },
        { eId: 'hots', img: '', title: '双板' },
        { eId: 'hots', img: '', title: '雪服' },
        { eId: 'hots', img: '', title: '护镜' },
        { eId: 'hots', img: '', title: '头盔' },
        { eId: 'hots', img: '', title: '固定器' },
        { eId: 'hots', img: '', title: '雪靴' }
      ]
    },
    {
      id: 1,
      title: '潜水',
      rankMenuContentPC: [
        { eId: 'hots', img: '', title: '护镜' },
        { eId: 'hots', img: '', title: '潜水服' },
        { eId: 'hots', img: '', title: 'BCD' },
        { eId: 'hots', img: '', title: '脚蹼' },
        { eId: 'hots', img: '', title: '脚蹼' }
      ]
    },
    {
      id: 1,
      title: '冲浪',
      rankMenuContentPC: [{ eId: 'hots', img: '', title: '1' }]
    },
    {
      id: 1,
      title: '徒步',
      rankMenuContentPC: [{ eId: 'hots', img: '', title: '1' }]
    }
  ],
  [
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '测试' }] },
    {
      id: 1,
      title: '电视',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: 'Led电视' },
        { eId: 'miniLed', img: '', title: 'miniLed电视' },
        { eId: 'miniLed', img: '', title: 'OLED电视' },
        { eId: 'miniLed', img: '', title: '激光电视' }
      ]
    },
    {
      id: 1,
      title: '电脑配件/外设',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '显示器' },
        { eId: 'miniLed', img: '', title: '显示器支架' },
        { eId: 'miniLed', img: '', title: '显卡' },
        { eId: 'miniLed', img: '', title: 'CPU' },
        { eId: 'miniLed', img: '', title: '内存条' },
        { eId: 'miniLed', img: '', title: '风冷散热' },
        { eId: 'miniLed', img: '', title: '一体式水冷' },
        { eId: 'miniLed', img: '', title: '分体式水冷' },
        { eId: 'miniLed', img: '', title: '电源' },
        { eId: 'miniLed', img: '', title: '路由器' },
        { eId: 'miniLed', img: '', title: '游戏键盘' },
        { eId: 'miniLed', img: '', title: '商务键盘' },
        { eId: 'miniLed', img: '', title: '游戏鼠标' },
        { eId: 'miniLed', img: '', title: '商务鼠标' }
      ]
    },
    {
      id: 1,
      title: '笔记本电脑',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '游戏本' },
        { eId: 'miniLed', img: '', title: '商务本' },
        { eId: 'miniLed', img: '', title: '工作站' }
      ]
    },
    {
      id: 1,
      title: '手机',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '老人手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '高端旗舰' }
      ]
    },
    {
      id: 1,
      title: '摄影',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: 'vlog' },
        { eId: 'miniLed', img: '', title: '运动相机' },
        { eId: 'miniLed', img: '', title: '微单相机' },
        { eId: 'miniLed', img: '', title: '半画幅' },
        { eId: 'miniLed', img: '', title: '全画幅' },
        { eId: 'miniLed', img: '', title: '镜头' },
        { eId: 'miniLed', img: '', title: '水下摄影-相机防水壳' }
      ]
    },
    {
      id: 1,
      title: '音频',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '5.1音效-家庭影院方案' },
        { eId: 'miniLed', img: '', title: '7.1音效-家庭影院方案' },
        { eId: 'miniLed', img: '', title: '回音壁' },
        { eId: 'miniLed', img: '', title: '前置' },
        { eId: 'miniLed', img: '', title: '低音炮' },
        { eId: 'miniLed', img: '', title: '声卡' }
      ]
    },
    {
      id: 1,
      title: '游戏设备',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '手柄' },
        { eId: 'miniLed', img: '', title: '赛车模拟器-选购方案' },
        { eId: 'miniLed', img: '', title: '赛车模拟器-座舱' },
        { eId: 'miniLed', img: '', title: '赛车模拟器-基座' },
        { eId: 'miniLed', img: '', title: '赛车模拟器-方向盘' },
        { eId: 'miniLed', img: '', title: '赛车模拟器-刹车' },
        { eId: 'miniLed', img: '', title: '赛车模拟器-离合' },
        { eId: 'miniLed', img: '', title: '飞行模拟器' },
        { eId: 'miniLed', img: '', title: '' }
      ]
    },
    {
      id: 1,
      title: '耳机',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '便携蓝牙耳机' },
        { eId: 'miniLed', img: '', title: '手机耳机' },
        { eId: 'miniLed', img: '', title: 'hifi耳机' },
        { eId: 'miniLed', img: '', title: '监听耳机' },
        { eId: 'miniLed', img: '', title: '游戏耳机' }
      ]
    },
    {
      id: 1,
      title: '其他',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '电竞椅' },
        { eId: 'miniLed', img: '', title: '人体工学椅' },
        { eId: 'miniLed', img: '', title: '护颈' }
      ]
    }
  ],
  [
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '家具' }] },
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '家具' }] }
  ],
  [{ id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '游戏' }] }],
  [
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '游戏' }] },
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '游戏' }] }
  ]
]
tapRankListMenuPC.value = rankMenuPC.value[0]
const tapMenu = (index: number) => {
  tapRankListMenuPC.value = rankMenuPC.value[index]
}

const handleContent = (menuItem: any) => {
  // 有内容的页面不提示 - 数据库
  dialog.warning({
    title: `${menuItem.title ? menuItem.title : ''} 暂无内容`,
    // content: '确定前往空白页？',
    positiveText: '确定',
    // negativeText: '取消',
    onPositiveClick: () => {
      // message.success('确定')
    },
    onNegativeClick: () => {
      // message.error('取消')
    }
  })
}
</script>
<template>
  <h2 fsem-2 text-center>购前指南，专业排行！</h2>
  <div class="box" flexb>
    <div class="box-l">
      <div class="box-l-pc" flex>
        <ul class="pc-menu">
          <li
            flex
            class="rank-button"
            v-for="(item, index) in rankListPC"
            :key="index"
            @mouseover="tapMenu(index)"
          >
            <img src="@/assets/img/logo_cat.png" alt="" srcset="" />
            <!-- <a href="/"> -->
            <span>{{ item.altContent }}</span>
            <!-- </a> -->
          </li>
        </ul>
        <div wfull class="menu-list-box" flex flex-wrap>
          <div
            class="pc-content"
            flex
            flex-wrap
            v-for="(item, idx) in tapRankListMenuPC"
            :key="idx"
          >
            <block>
              <h4 h-7 wfull fsem-1 style="line-height: 2em">{{ item.title }}</h4>
              <n-button
                text
                ghost
                h-8
                style="padding: 0.5rem; margin: 0"
                fspx-14
                v-for="(menuItem, idx) in item.rankMenuContentPC"
                @click="handleContent(menuItem)"
                :key="idx"
              >
                {{ menuItem.title }}
              </n-button>
              <n-button v-if="item.rankMenuContentPC?.length > 6" type="info" size="tiny" dashed>
                查看更多
              </n-button>
            </block>
          </div>
        </div>
      </div>
      <div class="box-l-h5">
        <div wfull flexb flex-wrap>
          <NuxtLink
            class="rank-button"
            v-for="(item, index) in rankListH5"
            :to="item.jumpToUrl"
            :key="index"
          >
            <div class="rank-button-txt">
              {{ item.altContent }}
              <p>{{ index !== 1 ? '排行榜' : '汇总' }}</p>
            </div>
            <!-- <img src="@/assets/img/logo_cat.png" alt="" srcset="" /> -->
          </NuxtLink>
        </div>
      </div>
      <div mt-2 mb-2 class="tool-box" flex flex-wrap>
        <!-- :to="item.jumpToUrl" -->
        <NuxtLink class="tool-button" text-center v-for="(item, index) in toolList" :key="index">
          <n-button @click="handleContent(item)" strong secondary type="success">
            <p fspx-15 m-0>{{ item.altContent }}</p>
          </n-button>
        </NuxtLink>
      </div>
    </div>
    <div class="box-r map-box">
      <ClientOnly>
        <TopMap></TopMap>
      </ClientOnly>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  overflow: hidden; /* 隐藏超出容器范围的部分，保证图片不会溢出容器 */
  padding: 1px 4px;
  @media screen and (min-width: 600px) {
    min-height: 70vh;
    max-height: 1000px;
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
  .box-l {
    height: 99%;
    @media screen and (min-width: 600px) {
      /* PC版样式 */
      width: 36%;
      min-width: 568px;
      .box-l-pc {
        height: 65vh;
        .pc-menu {
          min-width: 9em;
          background-color: rgb(0, 217, 255);
          .rank-button {
            cursor: pointer;
            align-items: center;
            height: 3rem;
            img {
              margin: 0 0.5rem;
              height: 2rem;
              width: 2rem;
            }
          }
          .rank-button:hover {
            background-color: aqua;
          }
        }
        .menu-list-box {
          overflow-y: scroll;
          padding-left: 4px;
          .pc-content {
            width: 100%;
            border-radius: 6px;
            margin: 2px 0;
            padding: 4px 2px;
            background-color: aliceblue;
          }
        }
      }
      .box-l-h5 {
        display: none;
      }
    }
    @media screen and (max-width: 600px) {
      /* 移动端样式 */
      width: 100%;
      // padding: 0 2px;
      .box-l-pc {
        display: none;
      }
      .box-l-h5 {
        flex-wrap: wrap;
        position: relative;
        margin: auto;
        align-items: center;
        text-align: center;
        max-width: 1000px;
        padding: 0 3px;
        .rank-button {
          position: relative;
          margin: 0.2rem 0;
          border-radius: 0.5rem;
          width: 32%;
          height: 4rem;
          background-color: aqua;
        }
        .rank-button-txt {
          position: absolute;
          left: 4px;
        }
        img {
          position: absolute;
          right: 4px;
          bottom: 50%;
          transform: translate(0, 50%);
          width: 48%;
          height: 70%;
        }
        .rank-button:nth-child(1) {
          width: 65.7%;
          height: 8.4rem;
        }
        .rank-button:nth-child(2) {
          height: 8.4rem;
        }
      }
    }
    .tool-box {
      height: 10%;
      align-items: center;
      padding: 2px 4px;
      .tool-button {
        padding: 0 0.4rem;
        // width: 6.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border-radius: 0.6rem;
        font-weight: 700;
        // background-color: #1b1854;
        color: #fff;
      }
      @media screen and (max-width: 414px) {
        .tool-button:nth-last-child(1) {
          margin-top: 0.5em;
        }
      }
    }
  }

  .box-r {
    background-color: #e9e9e9;
    min-width: 350px;
    height: 100%; /* 让高度自适应，以保持原始比例 */
  }

  .map-box {
    @media screen and (min-width: 600px) {
      width: 63%;
      min-height: 70vh;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    border-radius: 10px;
  }
}
</style>
