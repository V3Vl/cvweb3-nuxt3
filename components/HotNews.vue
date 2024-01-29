<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
</script>

<template>
  <div class="hotnews" border>
    <p fsem-10>🆕</p>
    <p fsem-10>🆕</p>
  </div>
</template>

<style lang="scss" scoped>
.hotnews {
  width: 50%;
  min-width: 350px;
  max-height: 500px;
}
</style>
