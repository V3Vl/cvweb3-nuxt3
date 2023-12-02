// 用户设备信息
import { defineStore } from 'pinia'
export const useClient = defineStore(
  'client',
  () => {
    const clientWidth = ref(0)
    const clientType = ref('')
    onMounted(() => {
      clientWidth.value = window.screen.width
      clientType.value = (() => {
        if (clientWidth.value > 1024) {
          return 'PC'
        } else if (clientWidth.value > 599 && clientWidth.value <= 1024) {
          return 'ipad'
        } else {
          return 'MOBILE'
        }
      })()
      console.log(clientWidth.value)
    })
    return {
      clientWidth,
      clientType
    }
  },
  { persist: true }
)
