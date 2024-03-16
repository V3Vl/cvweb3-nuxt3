<script setup lang="ts"></script>

<template>
  <Header />
  <div mt-4rem>
    <slot />
  </div>
  <Footer />
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
