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
const _type = 'card'
</script>

<template>
  <!-- <h1>{{ headData.title }}</h1> -->
  <!-- current rank menu -->
  <div border style="background-color: #f5f6f7">
    <div class="rank_menu_box">
      <div>menu</div>
      <!-- <ClientOnly> -->
      <n-tabs :type="_type" animated :placement="_placement">
        <n-tab-pane
          v-for="(item, index) in rankData.data"
          :key="index"
          :name="item.pid"
          :tab="item.pid"
        >
          <n-grid
            v-if="item.PCRankMenuContents.length > 0"
            cols="2 s:3 m:4"
            responsive="screen"
            :x-gap="5"
            :y-gap="5"
          >
            <n-grid-item v-for="(itemItem, index) in item.PCRankMenuContents" :key="index">
              <div class="rank_menu_btn" border>{{ itemItem.id }}</div>
            </n-grid-item>
          </n-grid>
          <n-empty v-else description="没有内容">
            <template #extra>
              <n-button size="small"> 看看别的 </n-button>
            </template>
          </n-empty>
        </n-tab-pane>
      </n-tabs>
      <!-- </ClientOnly> -->
    </div>
    <!-- hot brand -->
    <div class="brand_menu_box">
      <div>hots</div>
      <n-grid
        :cols="4"
        :collapsed="gridCollapsed"
        :collapsed-rows="gridCollapsedRows"
        :x-gap="4"
        :y-gap="4"
      >
        <!-- <n-gi v-for="i in gridItemCount" :key="i" :class="i % 2 ? 'green' : 'xxx'"> -->
        <n-gi v-for="(item, index) in rankData.data" :key="index" class="brand_btn">
          {{ item.pid }}
        </n-gi>
        <n-gi
          border
          v-if="rankData.data.length > 7"
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
  background-color: #fff;
  margin: 0 auto;
  width: 96vw;
  // 大于等于 2*grid高度+tab高度
  min-height: 35vh;
}
.brand_menu_box {
  background-color: #fff;
  margin: 0 auto;
  width: 96vw;
  min-height: 30vh;
}
.rank_news_box {
  background-color: #fff;
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
