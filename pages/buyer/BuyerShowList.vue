<script setup lang="ts">
import { slotFlagsText } from '@vue/shared'
import { ref } from 'vue'
const a = ref(0)
</script>

<template>
  <div class="shoplist" m="0 auto" border>
    <div class="scroll-container" border>
      <div class="container">
        <div class="sticky-wrapper">
          <div class="sticky-component" style="background-color: blue">开发中 暂未上线</div>
        </div>
        <div class="normal-component">
          <div class="normal-item" v-for="item in 25">
            <div h-50 w-50 border>{{ item }}</div>
          </div>
        </div>
        <div class="sticky-wrapper">
          <div class="sticky-component" style="background-color: red">开发中 暂未上线</div>
        </div>
        <div class="normal-component" style="height: 1200px">开发中 暂未上线</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shoplist {
  width: 100%;
  background-color: #e9e9e9;
}
.scroll-container {
  width: 100%;
  height: 90vh; /* 设置滚动容器的高度 */
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
  height: 100px;
}

.normal-component {
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  overflow-y: scroll;
  .normal-item {
    margin: 3px 8px;
  }
  // test
}
</style>
