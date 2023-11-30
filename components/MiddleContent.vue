<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
</script>

<template>
  <div class="middle-content" text-center>
    <h2>H2：可以服饰首页，下滑查看更多</h2>
    <h3>H3：重新阅读了nuxt文档，数据获取和生命周期；修复了项目中隐藏的关键错误！</h3>
    <div class="put-down">
      <down-outlined />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.middle-content {
  background: linear-gradient(180deg, #fff4e9, #f8efff);
  height: 23vh;
  font-family: Grotesk-Bold, Verdana-fallback-2, 'sans-serif';
  h2 {
    font-weight: 700;
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 550;
  }
  .put-down {
    // color: cornflowerblue;
    font-size: 3rem;
  }
}
</style>
