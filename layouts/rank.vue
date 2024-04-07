<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id || 1))
// const prev = computed(() => '/' + (id.value - 1))
// const next = computed(() => '/' + (id.value + 1))
</script>

<template>
  <RankHeader />
  <RankKeys />
  <slot />
  <Footer />
</template>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
</style>
