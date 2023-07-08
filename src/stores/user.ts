import { defineStore } from 'pinia'

const USER_INFO = {
  userName: 'PP Bond',
  id: 1,
  sex: 'M',
}

export const useUserStore = defineStore('userInfo', () => {

  const userInfo = reactive(USER_INFO)

  return {
    userInfo,
  }
})