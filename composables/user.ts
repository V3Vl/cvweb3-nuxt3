import { defineStore } from 'pinia'

export const useUser = defineStore(
  'user',
  () => {
    const token = ref('')
    // 储存登录返回的token
    const setLoginSuccState = (_token: string) => {
      console.log('1>>>', _token)
      token.value = _token
      console.log('2>>>', token)
    }
    return {
      setLoginSuccState,
      token
    }
  },
  //持久化储存
  { persist: true }
)
