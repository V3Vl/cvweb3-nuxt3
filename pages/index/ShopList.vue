<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
</script>

<template>
  <div class="shoplist">
    <!-- <div class="scroll-container" border>
      <div class="container">
        <div class="sticky-wrapper">
          <div class="sticky-component" style="background-color: #000">Component A</div>
        </div>
        <div class="normal-component">Component B</div>
        <div class="sticky-wrapper">
          <div class="sticky-component" style="background-color: red">Component C</div>
        </div>
        <div class="normal-component">Component D</div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.shoplist {
  width: 100%;
  height: 100vh;
  background-color: #e9e9e9;
}
.scroll-container {
  height: 300px; /* 设置滚动容器的高度 */
  overflow-y: scroll; /* 开启垂直滚动 */
}

.container {
  position: relative;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
}

.sticky-component {
  /* styles for sticky components */
  height: 100px;
}

.normal-component {
  /* styles for normal components */
  height: 500px;
}
</style>
