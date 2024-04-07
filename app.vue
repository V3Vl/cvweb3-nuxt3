<script setup>
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
  ],
  script: [
    {
      src: '/pb_utils/BaiduSEO.js',
      body: false
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/reset.scss';
</style>
