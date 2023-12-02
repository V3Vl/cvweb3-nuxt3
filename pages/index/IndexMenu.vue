<script setup lang="ts">
import { getCategory } from '~/api/category'
const activeKey = ref(1)
const tabBarStyle = ref({
  width: '160px',
  height: '25vh',
  textAlign: 'center',
  backgroundColor: '#000'
})
// const mode = ref<TabsProps['tabPosition']>('left')
// 待优化 增加判断 防止接口异常时渲染也异常
// const categoryList = (await getCategory()).data
const toVideoPage = () => {
  navigateTo(`/videoPage/videoDemoPage`)
}
</script>

<template>
  <div class="menu">
    <!-- <a-tabs
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
            <a-button size="large" @click="toVideoPage">视频功能demo</a-button>
          </div>
        </a-card>
      </a-tab-pane>
    </a-tabs> -->
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 25vh;
}
</style>
