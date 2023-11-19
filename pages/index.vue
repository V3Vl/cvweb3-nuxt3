<script lang="ts" setup>
import IndexMenu from './index/IndexMenu.vue'
import BuyerShowList from './buyer/BuyerShowList.vue'
const { indexType } = $(useModel())
useHead({
  title: indexType == 1 ? '可以服饰 - 首页' : '可以服饰 - 买家秀'
})
</script>

<template>
  <div v-if="indexType == 1" class="main-index">
    <!-- 轮播图 -->
    <TopProduct></TopProduct>
    <!-- 下端导航 -->
    <div style="position: relative">
      <div>
        <IndexMenu></IndexMenu>
      </div>
    </div>
  </div>
  <div v-if="indexType == 2" pt-56px style="height: 100vh">
    <BuyerShowList></BuyerShowList>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.main-index {
  position: relative;
  width: 100%;
  min-width: 1200px;
  overflow-y: scroll;
}
</style>
