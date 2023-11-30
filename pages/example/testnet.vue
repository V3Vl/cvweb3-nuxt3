<script setup lang="ts">
// 待优化 增加判断 防止接口异常时渲染也异常
const categoryList = ref([])
useAsyncData('', () =>
  $fetch('http://127.0.0.1:8080/api/product/v1/category', {
    method: 'GET'
  })
).then((res) => {
  categoryList.value = res.data.value.data
  console.log('>>>>0', categoryList.value)
})
</script>

<template>
  <div>
    <h1>这是一个请求示例</h1>
    {{ categoryList }}
  </div>
</template>

<style lang="scss" scoped></style>
