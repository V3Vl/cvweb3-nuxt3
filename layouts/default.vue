<script setup lang="ts">
const tabPosition = ref<any['tabPosition']>('top')
const activeKey = ref('0')
const activeKeyEmitTo = ref<number>(0)
let { indexType } = $(useModel())
const route = useRoute()
</script>

<template>
  <Header :activeKeyEmit="activeKeyEmitTo" />
  <div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
