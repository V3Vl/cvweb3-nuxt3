<script lang="ts" setup>
import home from "@/layouts/home/index.vue";
// import headerBar from '@/layouts/header/index.vue'
import { test } from "../api/test";
import type { CSSProperties } from "vue";
// import 'HomeOutlined' from '@ant-design/icons'

// 二次接口封装请求
const data = await test();
const headerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: CSSProperties = {};

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

console.log("data", data);

// pinia调试
const { count, add, multiplyCount } = $(useUser());
const addClick = () => {
  add();
};
onMounted(() => {});
</script>

<template>
  <!-- 轮播位-主推商品 -->
  <div class="box-topproduct">
    <topproduct />
    <!-- <home /> -->
  </div>
  <a-layout mt-750px>
    <!-- 浮动顶部导航 -->
    <a-layout-header :style="headerStyle">世纪农业网</a-layout-header>
    <!-- 主体导航列表 -->
    <a-layout-content :style="contentStyle">
      <home></home>
    </a-layout-content>
    <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
  </a-layout>
</template>

<style lang="scss" scoped>
.box-topproduct {
  position: absolute;
  top: 0;
  height: 750px;
  width: 100%;
}
</style>
