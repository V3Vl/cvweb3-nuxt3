<script lang="ts" setup>

const q7 = ref(1)
// const data = reactive({price: 790000.00, color: 'bl'})

// 二次接口封装请求
import { test } from '../api/test'
const data = await test()
console.log('data', data)

// pinia调试
const { count, add, multiplyCount } = $(useUser())
const addClick = () => {
  add()
}

</script>

<template>
  <div class="home">
    <div w-200 h-20 bg-blue color-red fs-30 flexc font-600>cvWeb3</div>
    <a-button type="primary">按钮</a-button><br />
    <h1>当前pinia的初始化值：{{ count }}</h1>
    <a-button @click="addClick">增加</a-button>
    <h2>当前pinia的计算的值：{{ multiplyCount }}</h2>
  </div>
</template>

<style scoped></style>