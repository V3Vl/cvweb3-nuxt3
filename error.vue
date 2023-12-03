<script setup lang="ts">
import { NResult, NButton } from 'naive-ui'
const props = defineProps({
  error: Object
})
const pTips = ref('')
const pDescription = ref('')
let _errTips: any = {
  '404': () => {
    ;(pTips.value = '404 该页面不存在'), (pDescription.value = '时间匆匆，暂未开发')
  },
  '403': () => {
    ;(pTips.value = '禁止访问'), (pDescription.value = '总有些门是对你关闭的')
  },
  '500': () => {
    ;(pTips.value = '服务器错误'), (pDescription.value = '服务器出错可能说明该雇更多程序员了')
  },
  '418': () => {
    ;(pTips.value = '未知错误'), (pDescription.value = '在它出现以前一般不会有人管它')
  }
}
_errTips[props.error.statusCode]()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div h-80vh flexc>
    <n-result status="403" :title="pTips" :description="pDescription">
      <!-- <n-result status="403" :title="error.message" description="总有些门对你是关闭的"> -->
      <template #footer>
        <n-button size="large" @click="handleError">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>
