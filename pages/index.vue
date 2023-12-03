<script lang="ts" setup>
import BuyerShowList from './buyer/BuyerShowList.vue'
const { indexType } = $(useModel())
const description = ref('这里是动态返回的，或许可以用SEO后台管理系统控制')
const keyword = ref('关键词1,关键词2,关键词3,关键词4')
useHead({
  title: '可以服饰',
  charset: 'utf-8',
  meta: [
    { name: 'keyword', content: keyword },
    { name: 'description', content: description },
    { name: 'author', content: '潘毅' }
  ]
})
// throwError('开发者故意的')
</script>

<template>
  <div class="main-index">
    <TopProduct></TopProduct>
    <MiddleContent></MiddleContent>
    <ShopMenu></ShopMenu>
    <PartnerLink></PartnerLink>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.main-index {
  position: relative;
  // width: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
