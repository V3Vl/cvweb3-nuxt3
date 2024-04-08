<script setup lang="ts">
import { getCategory } from '~/api/category'
definePageMeta({
  layout: 'rank',
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  // 过渡效果文档：https://nuxt.com.cn/docs/getting-started/transitions#%E5%B8%83%E5%B1%80%E8%BF%87%E6%B8%A1
  // 中间件文档：https://nuxt.com.cn/docs/guide/directory-structure/middleware
  middleware(to: any, from: any) {
    to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
  }
})
interface IHeadData {
  title: string
  keyword: string
  description: string
}
const route = useRoute()

async function getData() {
  console.log('>>', route, route.params)
}
getData()

const headData = ref<IHeadData>()
headData.value = {
  title: route.query.content + '排行榜',
  keyword: '',
  description: '什么型号位列前茅？什么型号值得入手？'
}
// 还需要一个专门设置head的接口
const rankData = await getCategory(route.params.id)
rankData.data.forEach((element: any, index: number) => {
  if (index > 0) headData.value.keyword += `${element.title}排行榜,`
})
console.log(rankData.data)
useHead({
  title: headData.value.title,
  charset: 'utf-8',
  meta: [
    { name: 'keyword', content: headData.value.keyword },
    { name: 'description', content: headData.value.description }
  ]
})
// 栅格
// 折叠后行数
const gridCollapsedRows = ref(2)
// 折叠flag
const gridCollapsed = ref(true)
// 栅格数据
// const gridItemCount = ref(20)
// 是否显示折叠按钮
const showSuffix = ref(true)

// tabs
// const placement = ref<NonNullable<TabsProps['placement']>>('top')
// const type = ref<TabsProps['type']>('bar')
const _placement = 'top'
const _type = 'bar'
</script>

<template>
  <!-- <h1>{{ headData.title }}</h1> -->
  <!-- current rank menu -->
  <div class="rank_menu_box">
    <div>menu</div>
    <ClientOnly>
      <n-tabs border :type="_type" animated :placement="_placement">
        <n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
        <n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
        <n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
        <n-tab-pane name="oasis1" tab="Oasis1"> Wonderwall </n-tab-pane>
        <n-tab-pane name="the beatles1" tab="the Beatles1"> Hey Jude </n-tab-pane>
        <n-tab-pane name="jay chou1" tab="Jay Chou1"> Qilixiang </n-tab-pane>
        <n-tab-pane name="oasis2" tab="Oasis2"> Wonderwall </n-tab-pane>
        <n-tab-pane name="the beatles2" tab="the Beatles2"> Hey Jude </n-tab-pane>
        <n-tab-pane name="jay chou2" tab="Jay Chou2"> Qilixiang </n-tab-pane>
        <n-tab-pane name="oasis3" tab="Oasis3"> Wonderwall </n-tab-pane>
        <n-tab-pane name="the beatles3" tab="the Beatles3"> Hey Jude </n-tab-pane>
        <n-tab-pane name="jay chou3" tab="Jay Chou3"> Qilixiang </n-tab-pane>
        <n-tab-pane name="oasis4" tab="Oasis4"> Wonderwall </n-tab-pane>
        <n-tab-pane name="the beatles4" tab="the Beatles4"> Hey Jude </n-tab-pane>
        <n-tab-pane name="jay chou4" tab="Jay Chou4"> Qilixiang </n-tab-pane>
        <n-tab-pane name="oasis5" tab="Oasis5"> Wonderwall </n-tab-pane>
        <n-tab-pane name="the beatles5" tab="the Beatles5"> Hey Jude </n-tab-pane>
        <n-tab-pane name="jay chou5" tab="Jay Chou5"> Qilixiang </n-tab-pane>
      </n-tabs>
    </ClientOnly>
    <n-grid cols="3 s:3 m:4" responsive="screen" :x-gap="5" :y-gap="5">
      <n-grid-item v-for="(item, index) in rankData.data" :key="index">
        <div class="rank_menu_btn">{{ item.pid }}</div>
      </n-grid-item>
    </n-grid>
  </div>
  <!-- hot brand -->
  <div class="brand_menu_box">
    <div>hots</div>
    <!-- 横向tab -->
    <div></div>
    <n-grid
      :cols="4"
      :collapsed="gridCollapsed"
      :collapsed-rows="gridCollapsedRows"
      :x-gap="4"
      :y-gap="4"
    >
      <!-- <n-gi v-for="i in gridItemCount" :key="i" :class="i % 2 ? 'green' : 'xxx'"> -->
      <n-gi v-for="(item, index) in rankData.data" :key="index" class="brand_btn">
        {{ item.id }}
      </n-gi>
      <n-gi
        border
        v-if="showSuffix"
        suffix
        class="suffix"
        #="{ overflow }"
        @click="gridCollapsed = !gridCollapsed"
      >
        {{ overflow ? '展开' : '收起' }}
      </n-gi>
    </n-grid>
  </div>
  <!-- current rank news -->
  <div class="rank_news_box">
    <div>news</div>
    <ul v-for="(item, index) in rankData.data" :key="index">
      <li>{{ item.pid }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}

.rank_menu_box {
  margin: 0 auto;
  width: 96vw;
  min-height: 30vh;
  background-color: #f5f6f7;
}
.brand_menu_box {
  margin: 0 auto;
  width: 96vw;
  min-height: 30vh;
  background-color: #f5f6f7;
}
.rank_news_box {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  li {
    margin: 0.3rem 0;
    width: 96vw;
    height: 136px;
    background-color: rgba(194, 20, 20, 0.555);
  }
}
.rank_menu_btn {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand_btn {
  text-align: center;
  height: 80px;
  background-color: cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.suffix {
  text-align: center;
}
</style>
