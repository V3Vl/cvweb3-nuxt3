<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id || 1))
const prev = computed(() => '/' + (id.value - 1))
const next = computed(() => '/' + (id.value + 1))
</script>

<template>
  <RankHeader />
  <slot />
  <div mt-4rem v-if="$route.params.id">
    <NuxtLink :to="prev">⬅️</NuxtLink> |
    <NuxtLink :to="next">➡️</NuxtLink>
  </div>
  <Footer />
</template>

<style lang="less" scoped></style>
