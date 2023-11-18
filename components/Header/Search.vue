<script lang="ts" setup>
// import { searchOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <div class="search" ml-2>
    <a-auto-complete placeholder="请输入搜索内容" class="w-220px! rounded-119px" />
    <div absolute flexc z-100 top-5px right-7px>
      <img src="/images/svg/search.svg" w-5 />
      <!-- <search-outlined /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 220px;
  :deep(.ant-select-selector) {
    border-radius: 119px;
  }

  :deep(.ant-select-selection-search) {
    width: 167px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
