<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
interface ISrcListType {
  src: string
  fallbackSrc?: string
  jumpToUrl?: string
}
const srcList = ref<Array<ISrcListType>>([])
console.log('NODE_ENV:', process.env.NODE_ENV)

srcList.value = [
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880x1620_10.jpg'
  },
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880x1620_28.jpg'
  },
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_THEMES_RGB_CROPPED_2880X1620_38.jpg'
  },
  {
    src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880X1620_33.jpg'
  }
]
</script>
<template>
  <div class="box">
    <div class="box-l">
      <div wfull>
        <h1 fsem-4 style="margin: 0">H1：可以官方网站</h1>
        <h2 fsem-3>H2：女装，商务，休闲，宴服</h2>
        <h3 fspx-30 style="margin: 0">H3：低调，奢华，有内涵</h3>
        <p fspx-18>P：促销，抢购，新品，限量</p>
      </div>
      <NuxtLink class="more-btn" to="/666">进入商城</NuxtLink>
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
        <img :src="item.src" />
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
    .more-btn {
      cursor: pointer;
      background-color: cyan;
      padding: 0.3rem 2rem;
      margin: 0 auto;
      font-size: 2.2em;
      border-radius: 1rem;
    }
    .more-btn:hover {
      color: #fff;
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
