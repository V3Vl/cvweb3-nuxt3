<script setup lang="ts">
import { getCategory } from '~/api/category'
import type { TabsProps } from 'ant-design-vue'
const activeKey = ref(1)
const tabBarStyle = ref({
  width: '160px',
  height: '25vh',
  textAlign: 'center',
  backgroundColor: '#000'
})
// const mode = ref<TabsProps['tabPosition']>('left')
const callback: TabsProps['onTabScroll'] = (val) => {}
// 待优化 增加判断 防止接口异常时渲染也异常
const categoryList = (await getCategory()).data
const toVideoPage = () => {
  navigateTo(`/videoPage/videoDemoPage`)
}
</script>

<template>
  <div class="menu">
    <a-tabs
      tabBarGutter="0"
      v-model:activeKey="activeKey"
      tab-position="left"
      :tabBarStyle="tabBarStyle"
      @tabScroll="callback"
      style="background-color: #ececec"
      animated
    >
      <a-tab-pane
        color="#fff"
        v-for="(item, index) in categoryList"
        :key="index"
        :tab="`${item.name}`"
      >
        <a-card>
          <a-card-grid
            v-for="itemBtn in item.subCategoryList"
            hoverable
            class="grid-item"
            style="width: 150px; text-align: center"
          >
            {{ itemBtn.name }}
          </a-card-grid>
          <div>
            <!-- 临时demo演示 -->
            <a-button size="large" @click="toVideoPage">视频功能demo</a-button>
          </div>
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 25vh;

  :deep(.ant-tabs-tab) {
    height: 8.33vh;
    width: 160px !important;
    background-color: #000;
  }
  :deep(.ant-tabs-tab-active) {
    width: 160px !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  :deep(.ant-tabs-tab:hover) {
    color: #fff;
  }
  :deep(.ant-tabs-left > .ant-tabs-content-holder) {
    padding: 10px 0;
  }
  :deep(.ant-card-body) {
    background-color: #ececec;
  }
  :deep(.ant-card-grid) {
    margin: auto 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 3px;
    border-radius: 8px;
    // font-weight: bold;
    color: #fff;
    background-color: #f89f60;
  }
  :deep(.ant-card-grid):hover {
    font-size: 1.2rem;
    color: #000;
    background-color: #fff;
    transition: color 0.3s ease-in-out;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: color;
  }
}
</style>
