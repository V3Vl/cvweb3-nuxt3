<script setup lang="ts">
import { NResult, NButton } from 'naive-ui'
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div h-80vh flexc>
    <n-result
      :status="error.statusCode == '500' ? '403' : error.statusCode"
      :title="`${error.statusMessage}`"
      description="服务器出错可能说明该雇更多程序员了"
    >
      <template #footer>
        <h2>也可能是{{ error.message }}</h2>
        <n-button size="large" @click="handleError">散财消灾</n-button>
      </template>
    </n-result>
  </div>
</template>
