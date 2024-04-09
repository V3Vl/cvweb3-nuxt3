<script setup lang="ts"></script>

<template>
  <div class="key_box" pt-104px wfull>
    <n-grid :x-gap="4" :y-gap="4" :cols="2" layout-shift-disabled>
      <n-gi>
        <div class="hot_title" />
      </n-gi>
      <n-gi :span="2">
        <div class="hot_menu" />
      </n-gi>
    </n-grid>
  </div>
</template>

<style lang="scss" scoped>
.key_box {
  padding-bottom: 1rem;
  @media screen and (min-width: 796px) {
    display: flex;
  }
  .hot_title {
    background-color: rgba(0, 128, 0, 0.12);
    @media screen and (min-width: 796px) {
      line-height: 108px;
    }
  }
  .hot_menu {
    width: 80%;
    height: 108px;
    line-height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
    @media screen and (max-width: 796px) {
      margin: 0 auto;
    }
  }
}
</style>
