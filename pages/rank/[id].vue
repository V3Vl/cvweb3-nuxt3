<script setup lang="ts">
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
</script>

<template>
  id页
  <h1>#{{ $route.params.id }}</h1>
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
