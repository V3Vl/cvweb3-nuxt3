<script setup lang="ts">
import { getCategory } from '~/api/category'
import type { TabsProps } from 'ant-design-vue'
const activeKey = ref(0)
const tabBarStyle = ref({
  // backgroundColor: 'rgba(0, 0, 0, 0.2)',
  // color: '#fff',
  height: '25vh',
  textAlign: 'center'
})
// const mode = ref<TabsProps['tabPosition']>('left')
const callback: TabsProps['onTabScroll'] = (val) => {}
// 待优化 增加判断 防止接口异常时渲染也异常
const categoryList = (await getCategory()).data
</script>

<template>
  <div class="menu" border>
    <a-tabs
      v-model:activeKey="activeKey"
      tab-position="left"
      :tabBarStyle="tabBarStyle"
      @tabScroll="callback"
    >
      <a-tab-pane
        color="#fff"
        style="background-color: #fff"
        v-for="(item, index) in categoryList"
        :key="index"
        :tab="`${item.name}`"
      >
        <template v-for="itemBtn in item.subCategoryList">
          <a-button> {{ itemBtn.name }} </a-button>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 25vh;
  width: 100%;
  // background-color: #0b1127;
}
::v-deep(.ant-tabs-tab) {
  background-color: rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 40px;
  margin: 0;
}
</style>
