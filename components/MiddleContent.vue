<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
const newsList = [
  { id: '1', title: '一个人真累', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  {
    id: '1',
    title: '写不下了aaaa',
    date: '2024.1.31',
    content: '红红火火恍恍惚惚哈哈哈哈红红火火恍恍惚惚哈哈哈哈'
  },
  {
    id: '1',
    title: '写不下了阿萨',
    date: '2024.1.31',
    content: '红红火火恍恍惚惚哈哈哈哈红红火火恍恍惚惚哈哈哈哈'
  },
  { id: '1', title: '写不下了', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  {
    id: '1',
    title: '写不下了',
    date: '2024.1.31',
    content: '红红火火恍恍惚惚哈哈哈哈红红红火火恍恍惚惚哈哈哈哈红火火恍恍惚惚哈哈哈哈'
  },
  { id: '1', title: '写不下了cc', date: '2024.1.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  {
    id: '1',
    title: '写不下了',
    date: '2024.11.31',
    content: '红红火火恍恍惚惚哈哈哈哈红红火火恍恍惚惚哈哈哈哈'
  },
  { id: '1', title: '写不下了', date: '2024.11.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.11.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.11.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.12.31', content: '红红火火恍恍惚惚哈哈哈哈' },
  { id: '1', title: '写不下了', date: '2024.12.31', content: '红红火火恍恍惚惚哈哈哈哈' },
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
  <div mt-2 flexc flex-wrap class="middle-content" text-center>
    <div border class="banner-lr">
      <h3>展位1</h3>
    </div>
    <n-carousel
      effect="card"
      prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
      next-slide-style="transform: translateX(50%) translateZ(-800px);"
      style="height: 264px"
      class="banner-center-box"
      :show-dots="false"
    >
      <n-carousel-item class="banner-center">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item class="banner-center">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item class="banner-center">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel-item>
    </n-carousel>
    <div border class="banner-lr"><h3>展位3</h3></div>
    <!-- <div class="middle-news">
      <h2 h-7 text-center>热点资讯</h2>
      <ul>
        <li fsem-1 flexb v-for="(item, index) in newsList" :key="index">
          <span>{{ item.title }}{{ index + 1 }}</span>
          <span fspx-12>{{ item.content }}</span>
          <span w-18 text-right fspx-12>{{ item.date }}</span>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.middle-content {
  position: relative;
  padding: 0 2px;
  background: linear-gradient(180deg, #fff4e9, #f8efff);
  font-family: Grotesk-Bold, Verdana-fallback-2, 'sans-serif';
  .middle-news {
    border-radius: 10px;
    ul {
      overflow-y: scroll;
      height: 86%;
      text-align: left;
      padding: 0 4px;
      span {
        cursor: pointer;
      }
      span:nth-child(1) {
        font-weight: bold;
        color: red;
        min-width: 80px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      span:nth-child(2) {
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        margin-left: 2px;
        width: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-lines: multiple;
        display: -webkit-box;
        overflow: hidden;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .banner-lr {
      width: 22%;
      height: 180px;
      background-color: #fff;
    }
    .banner-center-box {
      width: 55%;
      .banner-center {
        width: 40%;
      }
    }
    .middle-news {
      position: absolute;
      min-width: 264px;
      width: 20%;
      right: 20px;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 4px 0;
    h2 {
      font-weight: 700;
    }
    .middle-news {
      width: 80%;
      background-color: #fff;
      margin-bottom: 20px;
      ul {
        overflow-y: scroll;
        max-height: 380px;
      }
    }
    .banner-lr {
      width: 100%;
      height: 180px;
      background-color: #fff;
    }
    .banner-center-box {
      .banner-center {
        width: 80%;
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
