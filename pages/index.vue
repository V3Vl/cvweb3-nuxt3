<script lang="ts" setup>
const description = ref(
  '品牌榜 选购查排行可以排行榜，什么牌子。'
)
const keyword = ref('关键词1,关键词2,关键词3,关键词4')
useHead({
  title: '可以排行榜',
  charset: 'utf-8',
  meta: [
    { name: 'keyword', content: keyword },
    { name: 'description', content: description }
  ]
})
</script>

<template>
  <div class="main-index">
    <n-dialog-provider>
      <n-message-provider>
        <TopProduct></TopProduct>
      </n-message-provider>
    </n-dialog-provider>
    <MiddleContent></MiddleContent>
    <IndexVideo></IndexVideo>
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
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
