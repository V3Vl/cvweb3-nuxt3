<script lang="ts" setup>
const { indexType } = $(useModel())
const description = ref('这里是动态返回的，或许可以用SEO后台管理系统控制')
const keyword = ref('关键词1,关键词2,关键词3,关键词4')
useHead({
  title: '选购指南',
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
