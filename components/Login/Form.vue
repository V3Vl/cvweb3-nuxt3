<script setup lang="ts">
// import { sendCode } from '~~/api/notify'
// import { message } from 'ant-design-vue'
// import {
//   SmileOutlined,
//   MobileOutlined,
//   WechatOutlined,
//   GoogleOutlined,
//   FacebookOutlined
// } from '@ant-design/icons-vue'

// const emit = defineEmits(['loginOrReg'])
interface State {
  isLogin: boolean
  loginType: string
  checked: boolean
}
const state = reactive<State>({
  loginType: 'wechat',
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
  { content: '游客登录', iconSrc: 'SmileOutlined', type: 'free' },
  { content: '微信二维码登录', iconSrc: 'WechatOutlined', type: 'wechat' },
  { content: '手机号登录', iconSrc: 'MobileOutlined', type: 'mobile' },
  { content: 'Sign in Google', iconSrc: 'GoogleOutlined', type: 'google' },
  { content: 'Sign in Facebook', iconSrc: 'FacebookOutlined', type: 'facebook' }
]
// 注册成功后的响应
const rigisterSucc = () => {}
// 组件销毁 生命周期
</script>

<template>
  <div p="t-6px b-20px r-10px l-10px" flexc>
    <div w="30%" h-50 class="login-type" flex>
      <!-- 待添加图标 未明确动态添加的方式 -->
      <!--
        <a-button :icon="h(FacebookOutlined)" />
       -->
      <a-button v-for="item in loginTypeList" @click="changeLoginType(item.type)">
        {{ item.content }}
      </a-button>
    </div>
    <!-- 登录信息表单 -->
    <a-divider type="vertical" orientation="left" style="height: 256px; color: #e3e3e3" dashed />
    <div w="65%" h-74 class="user-form" p="t-5 b-5" text-center>
      <!-- 测试登录 -->
      <div v-show="state.loginType === 'free'">
        <span>游客登录</span>
        <LoginInAcount :parentLoginType="state.loginType"></LoginInAcount>
      </div>
      <div v-show="state.loginType === 'wechat'">
        <span>微信登录</span>
        <LoginInWechat :parentLoginType="state.loginType" />
      </div>
      <!-- 手机号登录 -->
      <div v-show="state.loginType === 'mobile'">
        <span>手机号登录</span>
        <!-- <LoginInPhone /> -->
        <div class="wx-qrcode" w-40 h-40 bd></div>
      </div>
      <!-- 微信扫码登录 -->

      <div v-show="state.loginType === 'google'">
        <span>google</span>
        <div class="wx-qrcode" w-40 h-40 bd></div>
      </div>
      <div v-show="state.loginType === 'facebook'">
        <span>facebook</span>
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
