<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
</script>

<template>
  <div :class="$style['container']">Index</div>
</template>

<style lang="scss" scoped>
.container {
}
</style>
