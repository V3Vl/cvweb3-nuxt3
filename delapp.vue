<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'ant-design-vue/es/message/style/css'
useHead({
  title: 'cvweb',
  meta: [
    { name: 'description', content: 'cvweb3' },
    { name: 'keywords', content: '123456' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<style>
/* page {
} */
</style>
