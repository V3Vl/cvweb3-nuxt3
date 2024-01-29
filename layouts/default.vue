<script setup lang="ts">
const { clientType } = $(useClient())
</script>

<template>
  <Header class="layoutcss" :_clientType="clientType" />
  <div class="layoutcss" mt-4rem>
    <slot />
  </div>
  <!-- <AISupport /> -->
  <Footer class="layoutcss" />
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
.layoutcss {
  // @media screen and (min-width: 780px) {
  //   width: 99%;
  // }
}
// .ipage {
//   overflow-x: hidden;
//   position: fixed;
//   overflow-y: auto;
// }
</style>
