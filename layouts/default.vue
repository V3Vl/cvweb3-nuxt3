<script setup lang="ts">
const { clientType } = $(useClient())
</script>

<template>
  <Header :_clientType="clientType" />
  <div mt-4rem>
    <slot />
  </div>
  <!-- <AISupport /> -->
  <Footer />
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
// .ipage {
//   overflow-x: hidden;
//   position: fixed;
//   overflow-y: auto;
// }
</style>
