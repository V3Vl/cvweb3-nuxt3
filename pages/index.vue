<script lang="ts" setup>
import BuyerShowList from './buyer/BuyerShowList.vue'
const { indexType } = $(useModel())
const description = ref('首页description')
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
</script>

<template>
  <div v-if="indexType == 1" class="main-index">
    <TopProduct></TopProduct>
    <MiddleContent></MiddleContent>
    <ShopMenu></ShopMenu>
    <PartnerLink></PartnerLink>
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
