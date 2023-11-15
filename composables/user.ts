import { defineStore } from 'pinia'

export const useUser = defineStore(
  'user',
  () => {
    const token = ref('')
    // 储存登录返回的token
    const setLoginSuccState = (_token: string) => {
      token.value = _token
      console.log('token>>>', token)
    }
    return {
      setLoginSuccState,
      token
    }
  },
  //持久化储存
  { persist: true }
)
