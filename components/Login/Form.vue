<script setup lang="ts">
import { sendCode } from '~~/api/notify'
import { message } from 'ant-design-vue'
import { register } from '../../api/account'

const emit = defineEmits(['loginOrReg'])
interface State {
  isLogin: boolean
  loginType: string
  checked: boolean
}
// interface FormState {
//   username: string;
//   nickname: string;
//   password: string;
//   remember: boolean;
// }
// 似乎和父组件重复了，有空了检查
const { formState } = defineProps<{
  formState: {
    username: string
    nickname: string
    password: string
    remember: boolean
    captcha: string
    code: string
  }
}>()
const state = reactive<State>({
  loginType: 'test',
  isLogin: true,
  checked: false
})
const changeLoginType = (_type: string): void => {
  state.loginType = _type
  console.log(state.loginType)
}
const changeLoginOrReg = (_isLogin: boolean) => {
  state.isLogin = _isLogin
  console.log(formState)
  // formState = {} as FormState;
  emit('loginOrReg')
}
const onFinish = (values: any) => {
  registerBtn()
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  // return !(formState.username && formState.password)
  return !formState.username
})
// 图形验证码
let captchaSrc = $ref(
  `http://127.0.0.1:8080/api/notify/v1/captcha?type=register&time=${Date.now()}`
)
const resetCaptcha = async () => {
  if (captchaSrc.includes('&time')) {
    captchaSrc = captchaSrc.replace(/&time=[0-9]*/, '&time=' + Date.now())
  }
}
// 验证码倒计时
let countDown = $ref(60)
let timer = $ref(null)
let isDisable = $ref(false)
const countDownFunc = () => {
  timer = setInterval(() => {
    countDown--
    if (countDown <= 0) {
      clearInterval(timer)
      countDown = 60
      isDisable = false
    }
  }, 1000)
}
// 获取手机验证码
const getCode = async () => {
  if (formState.username) {
    // 手机号正则([1开头][第二位][后面9位0-9])
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!phoneReg.test(formState.username)) {
      message.warn('请输入正确的手机号')
      return
    }
  } else {
    message.warn('请输入手机号')
  }
  if (!formState.captcha) return message.warn('请输入图形验证码')
  // 发送验证码（fox测试成功 项目上提示未登录（疑似需要token） 暂未修正]
  const data = await sendCode(formState.username, formState.captcha, 'register')
  if (data === 0) {
    isDisable = true
    countDownFunc()
    message.success('验证码发送成功')
  } else {
    resetCaptcha()
  }
}
// 注册
const registerBtn = async () => {
  console.log('666')
  const data = await register({ phone: formState.username, code: formState.code })
  if (data.code === 0) {
    console.log('注册成功', data)
    //...
  } else {
    console.log('注册失败', data)
  }
}
// 注册成功后的响应
const rigisterSucc = () => {}
// 组件销毁 生命周期
onBeforeMount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div p="t-6px b-20px r-10px l-10px" flexc>
    <div w="34%" h-50 class="login-type" flex>
      <div>
        <a-button @click="changeLoginType('test')">
          <template #icon><smile-outlined /></template>
          游客登录
        </a-button>
      </div>
      <div>
        <a-button @click="changeLoginType('mobile')">
          <template #icon><mobile-outlined /></template>
          Mobile
        </a-button>
      </div>
      <div>
        <a-button @click="changeLoginType('wx')">
          <template #icon><wechat-outlined /></template>
          Sign in WeChat
        </a-button>
      </div>
      <div>
        <a-button>
          <template #icon><google-outlined /></template>
          Sign in Google
        </a-button>
      </div>
      <div>
        <a-button>
          <template #icon><facebook-outlined /></template>
          Sign in Facebook
        </a-button>
      </div>
      <!-- <div>
        <script src="https://accounts.google.com/gsi/client" async></script>
        <div
          id="g_id_onload"
          data-client_id="YOUR_GOOGLE_CLIENT_ID"
          data-login_uri="https://your.domain/your_login_endpoint"
          data-auto_prompt="false"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="medium"
          data-theme="outline"
          data-width="100"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left"
        ></div>
      </div> -->
    </div>
    <a-divider type="vertical" orientation="left" style="height: 256px; color: #e3e3e3" dashed />
    <div w="60%" h-74 class="user-form" p="t-5 b-5" text-center>
      <div v-show="state.loginType === 'test'">
        <span>test</span>
        <div m="0 auto" w="80" class="test-login">
          <a-form
            :model="formState"
            name="normal_login"
            class="login-form"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              v-show="state.isLogin === false"
              label="Nickname"
              name="nickname"
              :rules="[{ required: true, message: 'Please input your nickname!' }]"
            >
              <a-input v-model:value="formState.nickname">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
              label="Username"
              name="username"
              :rules="[{ required: true, message: 'Please input your username!' }]"
            >
              <a-input v-model:value="formState.username">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <!-- 密码：暂用图形验证码 -->
            <!-- <a-form-item
              label="Password"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                style="float: left"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item> -->
            <!-- v-show="state.isLogin === false" -->
            <a-form-item
              name="captcha"
              :rules="[{ required: true, message: 'Please input your captcha!' }]"
            >
              <a-input-group compact>
                <a-input v-model:value="formState.captcha" style="float: left; width: 67%" />
                <img :src="captchaSrc" style="height: 34px" @click="resetCaptcha" />
                <!-- <a-button type="primary" @click="getCaptcha"
                  >图形验证码组件（暂见apifox）</a-button
                > -->
              </a-input-group>
            </a-form-item>
            <!-- 验证码 -->
            <a-form-item
              v-show="state.isLogin === false"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
            >
              <a-input-group compact>
                <a-input v-model:value="formState.code" style="float: left; width: 60%" />
                <a-button type="primary" @click="getCode" :disabled="isDisable">{{
                  isDisable ? `${countDown}s后重新获取` : '获取验证码'
                }}</a-button>
              </a-input-group>
            </a-form-item>

            <a-form-item v-show="state.isLogin === true">
              <a-form-item name="remember" no-style>
                <a-checkbox v-model:checked="formState.remember">Remember</a-checkbox>
              </a-form-item>
              <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>

            <a-form-item>
              <a-button
                v-show="state.isLogin"
                :disabled="disabled"
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Log in
              </a-button>
              <a-button
                v-show="state.isLogin === false"
                :disabled="disabled"
                type="primary"
                html-type="submit"
                class="login-form-button"
                @click="registerBtn"
              >
                Register
              </a-button>
              <span m="0 10px">Or</span>
              <a v-show="state.isLogin === true" @click="changeLoginOrReg(false)">register now!</a>
              <a v-show="state.isLogin === false" @click="changeLoginOrReg(true)">Go login!</a>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <!-- 手机扫码登录 -->
      <div v-show="state.loginType === 'mobile'">
        <span>mobile</span>
        <div class="wx-qrcode" w-40 h-40 bd></div>
      </div>
      <!-- 微信扫码登录 -->
      <div v-show="state.loginType === 'wx'">
        <span>Wechat</span>
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
