<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
interface ISrcListType {
  src: string
  altContent: string
  fallbackSrc?: string
  jumpToUrl?: string
}
const srcList = ref<Array<ISrcListType>>([])
const toolList = ref<Array<ISrcListType>>([])
const rankList = ref<Array<ISrcListType>>([])
const { clientType } = $(useClient())
rankList.value = [
  { src: '', jumpToUrl: '/rank/ShopRank', altContent: '商品' },
  { src: '', jumpToUrl: '/rank/CarRank', altContent: '汽车' },
  { src: '', jumpToUrl: '/rank/SchoolRank', altContent: '学校' },
  { src: '', jumpToUrl: '/rank/TravelRank', altContent: '旅游' },
  { src: '', jumpToUrl: '/rank/CanteenRank', altContent: '餐馆' },
  { src: '', jumpToUrl: '/rank/HumanRank', altContent: '名人' },
  { src: '', jumpToUrl: '/rank/PowerRank', altContent: '地区资源' }
]
toolList.value = [
  { src: '', jumpToUrl: '/tooler/Fitmentdiy', altContent: '装修预算清单' },
  { src: '', jumpToUrl: '/tooler/PCdiy', altContent: '自助装机清单' }
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
const tapMenu = (item: ISrcListType) => {
  console.log(item)
}
</script>
<template>
  <div class="box" flexb>
    <div border class="box-l-pc" flex>
      <div class="pc-menu">
        <div
          border
          class="rank-button"
          flex
          v-for="(item, index) in rankList"
          @click="tapMenu(item)"
          :key="index"
        >
          <img src="@/assets/img/logo_cat.png" alt="" srcset="" />
          <div class="rank-button-txt">{{ item.altContent }}排行榜</div>
        </div>
      </div>
      <div class="pc-content">content</div>
    </div>
    <div class="box-l-h5" border>
      <h3>购前指南，专业排行！</h3>
      <div wfull flexb flex-wrap>
        <NuxtLink
          class="rank-button"
          v-for="(item, index) in rankList"
          :to="item.jumpToUrl"
          :key="index"
        >
          <div class="rank-button-txt">
            {{ item.altContent }}
            <p>排行榜</p>
          </div>
          <img src="@/assets/img/logo_cat.png" alt="" srcset="" />
        </NuxtLink>
        <NuxtLink class="rank-button">
          <div class="rank-button-txt">
            测试
            <p>排行榜</p>
          </div>
        </NuxtLink>
      </div>
      <h4>预算清单，提前规划</h4>
      <div wfull flexb>
        <NuxtLink
          class="tool-button"
          v-for="(item, index) in toolList"
          :to="item.jumpToUrl"
          :key="index"
        >
          <p fspx-30 style="margin: 0">{{ item.altContent }}</p>
        </NuxtLink>
      </div>
    </div>
    <swiper
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
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
.box {
  // background-color: #f2f4f5;
  // max-width: 100%; /* 设置容器最大宽度为父元素的100% */
  /* 设置容器最大高度为父元素的100% */
  overflow: hidden; /* 隐藏超出容器范围的部分，保证图片不会溢出容器 */
  @media screen and (min-width: 600px) {
    /* PC版样式 */
    height: 72vh;
    .box-l-h5 {
      display: none;
    }
    .swiper-box {
      width: 60%;
    }
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    .box-l-pc {
      display: none;
    }
    .box-l-h5 {
      max-width: 1000px;
    }
    .swiper-box {
      height: 30vh;
    }
  }
  .box-l-pc {
    width: 38%;
    min-width: 468px;
    height: 99%;
    .pc-menu {
      width: 150px;
      .rank-button {
        cursor: pointer;
        align-items: center;
        height: 3rem;
        // padding-left: 3rem;
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
  }
  .box-l-h5 {
    position: relative;
    margin: auto;
    padding: 0 2px 8px 2px;
    text-align: center;
    flex-wrap: wrap;
    align-items: center;
    font-weight: 700;
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

    .tool-button {
      background-color: rgb(0, 255, 132);
      // margin: 1rem auto;
      width: 48%;
      height: 3rem;
      line-height: 3rem;
      border-radius: 0.6rem;
    }
  }
  .swiper-box {
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
  }
  img {
    width: 100%; /* 图片宽度占据容器的100% */
    height: auto; /* 让高度自适应，以保持原始比例 */
    display: block; /* 去除底部间隙，确保图片不会受到行高的影响 */
  }
}
</style>
