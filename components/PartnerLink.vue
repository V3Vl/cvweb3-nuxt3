<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getBannerList, getPartnerList } from '~/api/banner'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const modules = [Pagination]
// const partnerList = ref({ data: [{ link: '', partner: '' }] })
const partnerList = await getPartnerList()
</script>

<template>
  <div class="partner-box">
    <h2>合作厂家 - 外链</h2>
    <div class="partner">
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :centeredSlides="true"
        :modules="modules"
        :grabCursor="true"
        class="mySwiper"
      >
        <!-- <div flex> -->
        <swiper-slide v-for="(item, index) in partnerList.data" :key="index">
          <a :href="item.link" target="_blank">{{ item.partner }}</a>
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
  .partner {
    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      background: rgb(150, 186, 216);
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: 599px) {
        width: 10em !important;
        height: 10em;
        margin: 0 10px;
      }
      @media screen and (min-width: 599px) {
        width: 15em !important;
        height: 15em;
      }
      border-radius: 14px;
      p {
        font-size: 1.3rem;
      }
    }

    .swiper-slide img {
      display: block;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
