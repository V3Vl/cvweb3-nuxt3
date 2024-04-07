<script setup lang="ts"></script>

<template>
  <div class="key_box" pt-104px wfull>
    <div class="hot_title" border>标题1-1</div>
    <div class="hot_menu" border>swiper</div>
  </div>
</template>

<style lang="scss" scoped>
.key_box {
  @media screen and (min-width: 796px) {
    display: flex;
  }
  .hot_title {
    @media screen and (min-width: 796px) {
      line-height: 108px;
    }
  }
  .hot_menu {
    width: 80%;
    height: 108px;
    line-height: 108px;
    @media screen and (max-width: 796px) {
      margin: 0 auto;
    }
  }
}
</style>
