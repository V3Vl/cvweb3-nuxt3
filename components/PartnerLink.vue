<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const modules = [Pagination]
</script>

<template>
  <div class="partner-box">
    <h2>合作厂家（外链优化SEO）</h2>
    <div class="partner">
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :centeredSlides="true"
        :modules="modules"
        :grabCursor="true"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in 10" :key="index">
          <div class="partner-content"></div>
          <a href="/" target="_blank">外链{{ index }}</a>
          <!-- <p>外链{{ index }}</p> -->
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partner-box {
  padding-top: 60px;
  h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
  }
  // :deep(.ant-tabs-tab) {
  //   height: 8.33vh;
  //   width: 160px !important;
  //   background-color: #000;
  // }
  .partner {
    padding: 10px 28px;
    height: 400px;

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      background: #fff;

      display: flex;
      flex-direction: column;
      justify-content: center;
      .partner-content {
        width: 100%;
        height: 88%;
        background: #eeeeee;
        border-radius: 14px;
      }
      p {
        font-size: 1.3rem;
      }
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
