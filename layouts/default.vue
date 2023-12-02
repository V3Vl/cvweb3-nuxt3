<script setup lang="ts">
const { clientType } = $(useClient())
</script>

<template>
  <Header :_clientType="clientType" />
  <div>
    <slot />
  </div>
  <Footer />
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
