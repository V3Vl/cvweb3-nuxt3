<script lang="ts" setup>
import IndexMenu from './index/IndexMenu.vue'
useHead({
  title: '可以服饰 - 首页'
})
</script>

<template>
  <div class="main">
    <!-- banner -->
    <TopProduct border></TopProduct>
    <!-- 轮播图 -->
    <div class="swiper"></div>
    <!-- 下端导航 -->
    <IndexMenu></IndexMenu>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-width: 1200px;
}
</style>
