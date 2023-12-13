<script setup lang="ts">
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
  <div class="login-form" wfull text-center>
    <LoginInPhone v-if="state.loginType === 'phone'" :parentLoginType="state.loginType" />
    <LoginInWechat v-if="state.loginType === 'wechat'" :parentLoginType="state.loginType" />
    <div v-show="state.loginType === 'google'"></div>
    <div v-show="state.loginType === 'facebook'"></div>
  </div>
  <n-divider title-placement="center"> OR </n-divider>
  <div class="login-type" wfull flexc>
    <n-button text-center v-for="item in loginTypeList" @click="changeLoginType(item.type)">
      {{ item.content }}
    </n-button>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  position: relative;
  // height: 60%;
  margin: auto 0;
}
.login-type {
  flex-wrap: wrap;
  gap: 6px;
  .n-button {
    width: 70%;
    height: 3em;
    @media screen and (max-height: 667px) {
      height: 2.5em;
      border-radius: 2.5em;
    }
    border-radius: 3em;
    border: 0.2em solid #2b3035;
    color: #2b3035;
  }
}
</style>
