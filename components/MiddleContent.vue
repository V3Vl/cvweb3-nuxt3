<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
const newsList = [
  { id: '1', title: '一个人真累', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了aaaa', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了阿萨', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了cc', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' }
]
</script>

<template>
  <div flexc flex-wrap class="middle-content" text-center>
    <!-- <h2 wfull fsem-2>🆕Nuxt3</h2> -->
    <n-carousel
      effect="card"
      prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
      next-slide-style="transform: translateX(50%) translateZ(-800px);"
      style="height: 260px"
      class="banner-box"
      :show-dots="false"
    >
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel-item>
    </n-carousel>
    <div class="middle-news">
      <h2 text-center>热点资讯</h2>
      <ul>
        <li fsem-1 flexb v-for="(item, index) in newsList" :key="index">
          <span w-30>{{ item.title }}{{ index + 1 }}</span>
          <span fspx-12>{{ item.content }}</span>
          <span w-36 p-0>{{ item.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.middle-content {
  position: relative;
  padding: 0 16px;
  background: linear-gradient(180deg, #fff4e9, #f8efff);
  // height: 23vh;
  font-family: Grotesk-Bold, Verdana-fallback-2, 'sans-serif';
  @media screen and (min-width: 768px) {
    .banner-box {
      width: 55%;
    }
    .middle-news {
      position: absolute;
      right: 20px;
      height: 100%;
      min-width: 264px;
      width: 20%;
      ul {
        overflow-y: scroll;
        height: 90%;
        // padding: 20px 20px 20px 0;
        text-align: left;
        span {
          cursor: pointer;
        }
        span:nth-child(1) {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
          color: red;
        }
        span:nth-child(2) {
          margin-left: 4px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      padding: 16px 0;
      font-weight: 700;
      font-size: 2rem;
    }
    .middle-news {
      // display: none;
      width: 80%;
      background-color: #fff;
      ul {
        overflow-y: scroll;
        height: 400px;
      }
    }
  }

  .carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
