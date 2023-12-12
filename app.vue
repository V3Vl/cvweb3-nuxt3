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
  title: '可以服饰',
  meta: [
    { name: 'description', content: '可以服饰官方网站' },
    { name: 'keywords', content: '关键词1,关键词2,关键词3,这里是app.vue' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/reset.scss';
</style>
