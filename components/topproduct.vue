<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'ant-design-vue/es/message/style/css'
interface ISrcListType {
  src: string
  fallbackSrc?: string
  jumpToUrl?: string
}
const srcList = ref<Array<ISrcListType>>([])

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
      <h1>H1：可以服饰，官网购买</h1>
      <h2>H2：女装，商务，休闲，宴服</h2>
      <h3>H3：低调，奢华，有内涵</h3>
      <h4>P：谷哥度哥请爬取</h4>
      <a-button class="more-btn">查看更多</a-button>
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
  display: flex;
  justify-content: flex-end;
  background-color: #f2f4f5;
  max-width: 100%; /* 设置容器最大宽度为父元素的100% */
  height: 72vh; /* 设置容器最大高度为父元素的100% */
  overflow: hidden; /* 隐藏超出容器范围的部分，保证图片不会溢出容器 */
  .box-l {
    position: relative;
    padding: 10px 8px;
    width: 35%;
    font-weight: 700;
    text-align: center;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    .more-btn {
      font-size: 1.5rem;
      border-radius: 2rem;
      height: 3rem;
      width: 12rem;
    }
  }
  .swiper-box {
    border-radius: 15px;
    width: 75%;
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
