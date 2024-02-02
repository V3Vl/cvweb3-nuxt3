<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
</script>

<template>
  <div class="hotnews">
    <p fsem-10>🆕</p>
    <p fsem-10>🆕</p>
  </div>
</template>

<style lang="scss" scoped>
.hotnews {
  margin: 2px auto;
  min-width: 370px;
  width: 36%;
  max-height: 500px;
  height: 100%;
}
</style>
