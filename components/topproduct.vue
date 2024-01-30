<script lang="ts" setup>
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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
  { src: '', id: 1, jumpToUrl: '/rank/ShopRank', altContent: '电子 / 音像' },
  { src: '', id: 1, jumpToUrl: '/rank/ShopRank', altContent: '家居 / 家电' },
  { src: '', id: 2, jumpToUrl: '/rank/CarRank', altContent: '游戏 / 娱乐' },
  { src: '', id: 3, jumpToUrl: '/rank/CarRank', altContent: '装修 / 建材' },
  { src: '', id: 4, jumpToUrl: '/rank/HumanRank', altContent: '网课 / 书籍' },
  { src: '', id: 5, jumpToUrl: '/rank/SchoolRank', altContent: '运动 / 户外' },
  { src: '', id: 6, jumpToUrl: '/rank/CanteenRank', altContent: '选车 / 出行' },
  { src: '', id: 7, jumpToUrl: '/rank/CanteenRank', altContent: '鞋服 / 饰品' },
  { src: '', id: 8, jumpToUrl: '/rank/PowerRank', altContent: '城市 / 教育' },
  { src: '', id: 9, jumpToUrl: '/rank/TravelRank', altContent: '旅游 / 景点' }
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
  { src: '', jumpToUrl: '', altContent: '旅游规划1' },
  { src: '', jumpToUrl: '', altContent: '旅游计划2' }
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
      title: '手机',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '老人手机' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '高端旗舰' }
      ]
    },
    {
      id: 1,
      title: '电脑',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '高端旗舰' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '高端旗舰' }
      ]
    },
    { id: 1, title: '游戏设备' },
    {
      id: 1,
      title: '摄影',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '高端旗舰' }
      ]
    },
    { id: 1, title: '音响' },
    {
      id: 1,
      title: '耳机',
      rankMenuContentPC: [
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '高端旗舰' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '游戏手机' },
        { eId: 'miniLed', img: '', title: '1000元档' },
        { eId: 'miniLed', img: '', title: '3000元档' },
        { eId: 'miniLed', img: '', title: '高端旗舰' }
      ]
    },
    { id: 1, title: '其他' }
  ],
  [
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '家具' }] },
    { id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '家具' }] }
  ],
  [{ id: 1, title: '热门分类', rankMenuContentPC: [{ eId: 'hots', img: '', title: '游戏' }] }]
]
tapRankListMenuPC.value = rankMenuPC.value[1]
const tapMenu = (index: number) => {
  tapRankListMenuPC.value = rankMenuPC.value[index]
}
</script>
<template>
  <div class="box" flexb>
    <div class="box-l">
      <h2 text-center>购前指南，专业排行！</h2>
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
            <a href="/">
              <span>{{ item.altContent }}</span>
            </a>
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
            <img src="@/assets/img/logo_cat.png" alt="" srcset="" />
          </NuxtLink>
        </div>
      </div>
      <div class="tool-box" flexb flex-wrap>
        <NuxtLink
          class="tool-button"
          text-center
          v-for="(item, index) in toolList"
          :to="item.jumpToUrl"
          :key="index"
        >
          <p fspx-15 m-0>{{ item.altContent }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="box-r swiper-box" fsem-14 text-center>🐔</div>
    <!-- <swiper
      class="swiper-box"
      navigation
      pagination
      :modules="[Navigation, Autoplay, Pagination]"
      :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }"
      loop
    >
      <swiper-slide v-for="(item, idx) in srcList" :key="idx">
        <img :src="item.src" :alt="item.altContent" />
      </swiper-slide>
    </swiper> -->
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
        min-height: 72vh;
        max-height: 72vh;
        .pc-menu {
          min-width: 120px;
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
          // background-color: antiquewhite;
          overflow-y: scroll;
          padding-left: 4px;
          .pc-content {
            // max-height: 70vh;
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
        background-color: #1b1854;
        color: #fff;
      }
    }
  }

  .box-r {
    border: red 1px solid;
    min-width: 350px;
  }

  .swiper-box {
    @media screen and (min-width: 600px) {
      min-height: 70vh;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    width: 63%;
    border-radius: 10px;
    height: 100%; /* 让高度自适应，以保持原始比例 */
    --swiper-theme-color: #4e4d53;
    --swiper-navigation-size: 40px;
    :deep(.swiper-slide),
    :deep(.swiper-slide) img {
      cursor: pointer;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img {
      width: 100%; /* 图片宽度占据容器的100% */
      height: auto; /* 让高度自适应，以保持原始比例 */
      display: block; /* 去除底部间隙，确保图片不会受到行高的影响 */
    }
  }
}
</style>
