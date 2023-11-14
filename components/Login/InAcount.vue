<script setup lang="ts">
import { register } from '../../api/account'
import { sendCode } from '~/api/notify'
import { message } from 'ant-design-vue'
interface IState {
  isLogin: boolean
  isPwd: boolean
  checked: boolean
  forgetPwd: boolean
}
const state = reactive<IState>({
  isLogin: true,
  isPwd: true,
  checked: false,
  forgetPwd: false
})
interface IFormState {
  username: string
  nickname: string
  password: string
  captcha: string
  code: string
  remember: boolean
}
const formState: IFormState = reactive({
  username: '',
  nickname: '',
  password: '',
  captcha: '',
  code: '',
  remember: false
})
const changeLoginOrReg = (_isLogin: boolean) => {
  state.isLogin = _isLogin
  state.isPwd = _isLogin
  console.log(formState)
  // formState = {} as FormState;
  // emit('loginOrReg')
}

const pwdOrCode = (_type) => {
  state.isLogin = true
  state.isPwd = _type
}
const forgetPwdSet = () => {
  state.forgetPwd = true
  state.isLogin = true
  state.isPwd = false
}
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
const disabled = computed(() => {
  // return !(formState.username && formState.password)
  return !formState.username
})
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
  const params = {
    username: formState.username,
    captcha: formState.captcha,
    type: state.isLogin ? 'login' : 'register'
  }
  console.log(params)

  const data = await sendCode(
    formState.username,
    formState.captcha,
    state.isLogin ? 'login' : 'register'
  )
  if (data.code === 0) {
    isDisable = true
    countDownFunc()
    message.success('验证码发送成功')
  } else {
    resetCaptcha()
  }
}
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
const onFinish = (values: any) => {
  registerBtn()
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
// 注册
const registerBtn = async () => {
  // 待补充 判断
  const data = await register({
    phone: formState.username,
    code: formState.code,
    type: state.isLogin ? 'login' : 'register'
  })
  if (data.code === 0) {
    console.log('注册成功', data)
  } else {
    console.log('注册失败', data)
  }
}

const loginBtn = async () => {
  console.log('手机号', formState.username)
  console.log('密码', formState.password)
  console.log('图形验证码', formState.captcha)
  console.log('验证码', formState.code)
  console.log('是登录？', state.isLogin)
  console.log('是密码？', state.isPwd)
}
onBeforeMount(() => {
  clearInterval(timer)
})
</script>
<template>
  <div m="0 auto" w="80" class="test-login">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="请输入手机号">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        v-show="(state.isLogin === true && state.isPwd === true) || state.forgetPwd"
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input type="password" v-model:value="formState.password" placeholder="请输入密码">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        v-show="state.isLogin === false || state.isPwd === false"
        name="captcha"
        :rules="[{ required: true, message: '请输入图形验证码!' }]"
      >
        <a-input-group compact>
          <a-input
            v-model:value="formState.captcha"
            style="float: left; width: 67%"
            placeholder="请输入图形验证码"
          />
          <img :src="captchaSrc" style="height: 34px" @click="resetCaptcha" />
        </a-input-group>
      </a-form-item>
      <!-- 验证码 -->
      <a-form-item
        v-show="state.isLogin === false || state.isPwd === false"
        name="password"
        :rules="[{ required: true, message: '请输入手机验证码!' }]"
      >
        <a-input-group compact>
          <a-input v-model:value="formState.code" style="float: left; width: 60%" />
          <a-button type="primary" @click="getCode" :disabled="isDisable">{{
            isDisable ? `${countDown}s后重新获取` : '获取验证码'
          }}</a-button>
        </a-input-group>
      </a-form-item>

      <a-form-item v-show="state.isLogin === true && state.isPwd === true">
        <a class="login-form-forgot" @click="pwdOrCode(false)">手机验证码登录</a>
      </a-form-item>
      <a-form-item v-show="state.forgetPwd === false && state.isLogin !== state.isPwd">
        <a class="login-form-forgot" @click="pwdOrCode(true)"> 密码登录 </a>
      </a-form-item>
      <a-form-item v-show="state.isPwd === true && state.isLogin === true">
        <a class="login-form-forgot" @click="forgetPwdSet">忘记密码</a>
      </a-form-item>

      <a-form-item>
        <a-button
          v-show="state.isLogin && state.forgetPwd === false"
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
          @click="loginBtn"
        >
          登录
        </a-button>
        <a-button
          v-show="state.isLogin === false && state.forgetPwd === false"
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
          @click="registerBtn"
        >
          注册
        </a-button>
        <a-button
          v-show="state.forgetPwd === true"
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
          @click="loginBtn"
        >
          保存
        </a-button>

        <a v-show="state.forgetPwd === true" @click="state.forgetPwd = false">取消</a>
        <a
          v-show="state.isLogin === true && state.forgetPwd === false"
          @click="changeLoginOrReg(false)"
          >去注册</a
        >
        <a v-show="state.isLogin === false" @click="changeLoginOrReg(true)">去登录</a>
      </a-form-item>
    </a-form>
  </div>
</template>
<style lang="scss" scoped></style>
