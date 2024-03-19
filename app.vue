<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { io } from 'socket.io-client'
// socketio链接
const { initialize } = $(useSocket())

initialize()

// 同步用户数据
// const { asyncUserInfo } = $(useUser())
// await asyncUserInfo()

useHead({
  title: '可以排行榜',
  meta: [
    { name: 'description', content: '可以排行榜官网' },
    { name: 'keywords', content: '关键词1,关键词2,关键词3,这里是app.vue' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <!-- 进度条文档：https://nuxt.com.cn/docs/api/components/nuxt-loading-indicator -->
    <NuxtLoadingIndicator />
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/reset.scss';
</style>
