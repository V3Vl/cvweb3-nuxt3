import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'
import { getUserInfo } from '~/api/account'

export const useUser = defineStore(
  'user',
  () => {
    const token = ref('')
    const isLogin = ref(true)
    // 数据结构对应数据库个人信息表
    const personalInfo = ref({
      id: null,
      nickname: '',
      head_img: '',
      phone: '',
      pwd: '',
      position: null,
      slogan: '',
      sex: '1',
      role: null,
      city: null,
      read_time: null,
      openid: null
    })
    // 储存登录返回的token
    const setLoginSuccState = async (_token: string) => {
      token.value = _token
      await asyncUserInfo()
    }
    // 同步登录信息
    const asyncUserInfo = async () => {
      if (token.value === '') {
        isLogin.value = false
        return
      }
      const userInfo = await getUserInfo()
      if (userInfo.code === 0) {
        isLogin.value = true
        personalInfo.value = { ...userInfo.data }
      }
    }
    const logout = () => {
      clearInfo()
      // 已迁走统一提示 方便自定义操作
      // message.success('退出登录成功')
    }
    const clearInfo = () => {
      token.value = ''
      isLogin.value = false
      personalInfo.value = {} as any
    }
    return {
      setLoginSuccState,
      asyncUserInfo,
      logout,
      isLogin,
      token,
      personalInfo
    }
  },
  //持久化储存
  { persist: true }
)
