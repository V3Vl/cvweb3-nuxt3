<script setup lang="ts">
// import { useMessage, useDialog } from 'naive-ui'
</script>

<template>
  <div class="header" border wfull>
    <div class="header-t" flexb>
      <div class="menu_btn">menu</div>
      <ul border flex>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div border>搜索</div>
      <div>头像</div>
    </div>
    <!-- <div class="header-b" v-if="$route.params.id"> -->
    <div class="header-b" flexb>
      <div flex style="align-items: center">
        <!-- <NuxtLink :to="prev">⬅️</NuxtLink> | <NuxtLink :to="next">➡️</NuxtLink> | -->
        <n-breadcrumb separator=">">
          <n-breadcrumb-item> 面包屑1</n-breadcrumb-item>
          <n-breadcrumb-item> 面包屑2</n-breadcrumb-item>
          <n-breadcrumb-item> 面包屑3</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <div class="header_title">标题</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 9999;
  top: 0;
  padding: 4px;

  .header-t {
    height: 60px;
    @media screen and (max-width: 796px) {
      ul {
        display: none;
      }
      // .menu_btn {
      // }
    }
    @media screen and (min-width: 796px) {
      .menu_btn {
        display: none;
      }
      li {
        width: 100px;
      }
    }
  }
  .header-b {
    height: 34px;
    .header_title {
      font-weight: bold;
      font-size: 1.4rem;
      letter-spacing: 3px;
    }
  }
}
</style>
