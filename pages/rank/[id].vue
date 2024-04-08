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
console.log(headData)
useHead({
  title: headData.value.title,
  charset: 'utf-8',
  meta: [
    { name: 'keyword', content: headData.value.keyword },
    { name: 'description', content: headData.value.description }
  ]
})
</script>

<template>
  <!-- <h1>{{ headData.title }}</h1> -->
  <h1>#1</h1>
</template>

<style>
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
</style>
