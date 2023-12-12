<script setup lang="ts">
import { getCategory } from '~/api/category'
import { ICategoryList } from '~/types/api'
// const categoryList = ref({ data: [{ name: '1-1' }, { name: '1-2' }, { name: '1-3' }] })
const categoryList = await getCategory()
</script>

<template>
  <h1 text-center mt-20>商品分类</h1>
  <p text-center>还没买cdn，所以没有图片</p>
  <!-- <div class="box-t" wfull flexc>
    <div class="category" w-30 h-30 v-for="(item, index) in 5">
      <div class="category-img"></div>
      {{ index }}
    </div>
  </div> -->
  <div class="box-b" wfull flexc>
    <div class="category-card" v-for="(item, index) in categoryList.data">
      <div
        class="category-card-item"
        w-50
        h-75
        @click="navigateTo(`/shopListPage?id=${index}`)"
      ></div>
      <p text-center>{{ item.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-t,
.box-b {
  // box-sizing: border-box;
  width: 100%;
  padding: 18px 0;
  margin: 20px auto;
  flex-wrap: wrap;
  font-size: 1.1rem;
}
.category {
  margin: auto;
  text-align: center;
  cursor: pointer;
  .category-img {
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background-color: aqua;
  }
  .category-img:hover {
    background-color: rgb(0, 119, 255);
  }
}
.box-b {
  .category-card {
    margin: 16px 10px;
    .category-card-item {
      cursor: pointer;
      border-radius: 14px;
      background-color: aliceblue;
    }
  }
}
</style>
