<script setup lang="ts">
// import { sendCode } from '~~/api/notify'
// const emit = defineEmits(['loginOrReg'])
interface State {
  isLogin: boolean
  loginType: string
  checked: boolean
}
const state = reactive<State>({
  loginType: 'phone',
  isLogin: true,
  checked: false
})
const changeLoginType = (_type: string): void => {
  state.loginType = _type
  console.log(state.loginType)
}
interface ILoginTypeList {
  content: string
  iconSrc: string
  type: string
}
const loginTypeList: Array<ILoginTypeList> = [
  { content: '手机号登录', iconSrc: 'SmileOutlined', type: 'phone' },
  { content: '微信二维码登录', iconSrc: 'WechatOutlined', type: 'wechat' },
  { content: 'Sign in Google', iconSrc: 'GoogleOutlined', type: 'google' },
  { content: 'Sign in Facebook', iconSrc: 'FacebookOutlined', type: 'facebook' }
]
// 注册成功后的响应
const rigisterSucc = () => {}
// 组件销毁 生命周期
</script>

<template>
  <div p="t-6px b-20px r-10px l-10px">
    <div class="login-type" flex>
      <n-button v-for="item in loginTypeList" @click="changeLoginType(item.type)">
        {{ item.content }}
      </n-button>
    </div>
    <!-- 登录信息表单 -->
    <div wfull p="t-5 b-5" text-center>
      <!-- 测试登录 -->
      <div v-show="state.loginType === 'phone'">
        <!-- <span>手机号登录</span> -->
        <LoginInPhone :parentLoginType="state.loginType" />
      </div>
      <!-- 微信扫码登录 -->
      <div v-show="state.loginType === 'wechat'">
        <!-- <span>微信登录</span> -->
        <LoginInWechat :parentLoginType="state.loginType" />
      </div>
      <div v-show="state.loginType === 'google'">
        <div class="wx-qrcode" w-40 h-40 bd></div>
      </div>
      <div v-show="state.loginType === 'facebook'">
        <div class="wx-qrcode" w-40 h-40 bd></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-type {
  flex-wrap: wrap;
}

.wx-qrcode {
  margin: 0 auto;
}
</style>
