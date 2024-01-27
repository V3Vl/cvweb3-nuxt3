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
    altContent: '鞋'
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
</script>
<template>
  <div class="box">
    <div class="box-l">
      <!-- <div > -->
      <h3>购前指南，专业排行！</h3>
      <div wfull flexb flex-wrap>
        <NuxtLink
          class="rank-button"
          v-for="(item, index) in rankList"
          :to="item.jumpToUrl"
          :key="index"
        >
          <h4 fspx-30 style="margin: 0">{{ item.altContent }}</h4>
          <p>排行榜</p>
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

      <!-- <h1 fsem-4 style="margin: 0">理想清单</h1>
        <h2 fsem-3>女装，商务，休闲，宴服</h2>
        <h3 fspx-30 style="margin: 0">低调，奢华，有内涵</h3>
        <p fspx-18>促销，抢购，新品，限量</p> -->
      <!-- </div> -->
      <!-- <NuxtLink class="more-btn" to="/buyer/BuyerShowList">前往选购</NuxtLink> -->
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
  flex-wrap: nowrap;
  // background-color: #f2f4f5;
  max-width: 100%; /* 设置容器最大宽度为父元素的100% */
  /* 设置容器最大高度为父元素的100% */
  overflow: hidden; /* 隐藏超出容器范围的部分，保证图片不会溢出容器 */
  @media screen and (min-width: 768px) {
    /* PC版样式 */
    display: flex;
    height: 72vh;
    .box-l {
      width: 34%;
      h3 {
        font-size: 2em;
      }
      h4 {
        font-size: 1.6em;
      }
      p {
        font-size: 1.2em;
      }
    }
    .swiper-box {
      width: 65%;
    }
  }
  @media screen and (max-width: 768px) {
    .box-l {
      height: 42vh;
      h1 {
        font-size: 3em;
      }
      h2 {
        font-size: 2em;
      }
      h3 {
        font-size: 1.8em;
      }
      h4 {
        font-size: 1.4em;
      }
      p {
        font-size: 1.2em;
      }
    }
    .swiper-box {
      height: 30vh;
    }
  }
  .box-l {
    position: relative;
    padding: 10px 8px;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .rank-button {
      background-color: rgb(30, 255, 0);
      margin: 0.2rem 0;
      width: 29%;
      border-radius: 0.5rem;
    }
    .tool-button {
      background-color: aqua;
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
