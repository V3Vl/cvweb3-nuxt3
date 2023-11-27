<script setup lang="ts">
const tabPosition = ref<any['tabPosition']>('top')
const activeKey = ref('0')
const activeKeyEmitTo = ref<number>(0)
let { indexType } = $(useModel())
const route = useRoute()

const tabBarTit = ref(['首页', '买家广场'])
const tabBarStyleCSS = {
  position: 'fixed',
  top: 0,
  zIndex: '999',
  height: '50px',
  width: '170px',
  borderRadius: '0 0 20px 0',
  backgroundColor: 'rgba(0, 0, 0, 0.4)'
}

const tapTabs = (evt: number) => {
  if (route.path != '/') {
    if (evt == 0) {
      navigateTo('/')
    }
  } else {
    activeKeyEmitTo.value = evt
    indexType = evt
  }
}
watch(
  () => route.path,
  (newValue) => {
    if (newValue != '/') {
      tabBarTit.value = ['首页']
    } else {
      tabBarTit.value = ['首页', '买家广场']
    }
  }
)
onMounted(() => {
  if (route.path != '/') {
    tabBarTit.value = ['首页']
  } else {
    activeKeyEmitTo.value = 0
    tabBarTit.value = ['首页', '买家广场']
  }
})
</script>

<template>
  <Header :activeKeyEmit="activeKeyEmitTo" />
  <div class="tabsbox">
    <a-tabs
      tabBarGutter="0"
      :tabBarStyle="tabBarStyleCSS"
      v-model:activeKey="activeKey"
      :tab-position="tabPosition"
      animated
      @tabClick="tapTabs"
    >
      <a-tab-pane key="0" tab="首 页">
        <div>
          <slot />
        </div>
        <Footer />
      </a-tab-pane>
      <a-tab-pane key="1" tab="买家广场">
        <div>
          <slot />
        </div>
      </a-tab-pane>
      <!-- <a-tab-pane v-for="(item, index) in tabBarTit" :key="index" :tab="item">
        <div>
          <slot />
        </div>
      </a-tab-pane> -->
      <Footer />
    </a-tabs>
  </div>
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
// .layouts {
//   height: 100vh;
// }

.tabsbox {
  :deep(.ant-tabs-tab) {
    width: 78px;
  }
  :deep(.ant-tabs-ink-bar) {
    height: 6px;
    border-radius: 4px;
    background-color: rgba(252, 252, 252, 0.4);
  }
  :deep(.ant-tabs > .ant-tabs-nav .ant-tabs-nav-more) {
    display: none;
  }
  :deep(.ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom) {
    border-bottom: none;
  }
  :deep(.ant-tabs-tab-btn) {
    font-size: 15px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.4);
  }
  :deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
  :deep(.ant-tabs-tab-btn:hover) {
    color: #fff;
  }
}
</style>
