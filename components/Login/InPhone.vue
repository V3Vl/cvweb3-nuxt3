<script setup lang="ts">
import { register, login, forget } from '../../api/account'
import { sendCode } from '~/api/notify'
const { loginModel } = $(useModel())
const { setLoginSuccState } = $(useUser())
// import { useMessage } from 'naive-ui'
// const message = useMessage()
import { ILoginFormState, ILoginState } from '~/types/api'
const state = reactive<ILoginState>({
  isLogin: true,
  isPwd: true,
  checked: false,
  forgetPwd: false
})
const formState: ILoginFormState = reactive({
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

const pwdOrCode = (_type: boolean) => {
  state.isLogin = true
  state.isPwd = _type
  resetCaptcha('login')
}
const forgetPwdSet = () => {
  state.forgetPwd = true
  state.isLogin = true
  state.isPwd = false
  resetCaptcha('change')
}
// 图形验证码
let captchaSrc = $ref(``)
const resetCaptcha = async (type: string) => {
  if (type == '') {
    type = state.forgetPwd ? 'change' : state.isLogin ? 'login' : 'register'
  }
  captchaSrc = baseUrl + '/notify/v1/captcha?' + `type=${type}&time=${Date.now()}`
  if (captchaSrc.includes('&time')) {
    captchaSrc = captchaSrc.replace(/&time=[0-9]*/, '&time=' + Date.now())
  }
}
// 验证码倒计时
let isDisable = $ref(false)
const disabled = computed(() => {
  return !formState.username
})
// 获取手机验证码
const getCode = async () => {
  if (formState.username) {
    // 手机号正则([1开头][第二位][后面9位0-9])
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!phoneReg.test(formState.username)) {
      // message.warning('请输入正确的手机号')
      return
    }
  } else {
    // message.warning('请输入手机号')
  }
  if (!formState.captcha) {
    return
    // message.warning('请输入图形验证码')
  }
  const type: string = state.forgetPwd ? 'change' : state.isLogin ? 'login' : 'register'
  const res = await sendCode(formState.username, formState.captcha, type)
  if (res.code === 0) {
    isDisable = true
    countDownFunc()
    // message.success('验证码发送成功')
  } else {
    resetCaptcha(type)
  }
}
let countDown = $ref(60)
let timer = $ref(null)
const countDownFunc = () => {
  timer = setInterval(() => {
    countDown--
    if (countDown <= 0) {
      clearInterval(timer)
      isDisable = false
      countDown = 60
    }
  }, 1000)
}
const onFinish = (values: any) => {
  registerBtn()
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
// 注册
const registerBtn = async () => {
  // 待补充 判断
  const res = await register({
    phone: formState.username,
    code: formState.code,
    type: state.isLogin ? 'login' : 'register'
  })
  if (res.code === 0) {
    console.log('注册成功', res)
  } else {
    console.log('注册失败', res)
  }
}
// 登录
const loginBtn = async () => {
  const params = {
    phone: formState.username,
    password: formState.password,
    code: formState.code
  }
  const res = await login(params)
  if (res.code === 0) {
    loginModel.base = false
    setLoginSuccState(res.data)
    // message.success('登录成功')
  }
}
const saveUserBtn = async () => {
  const params = {
    phone: formState.username,
    password: formState.password,
    code: formState.code
  }
  const res = await forget(params)
  if (res.code === 0) {
    state.isLogin = true
    state.isPwd = true
    // message.success('登录成功')
  }
}
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>
<template>
  <n-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <n-form-item path="username">
      <span>手机号</span>
      <n-input v-model:value="formState.username" placeholder="请输入手机号" />
    </n-form-item>
    <n-form-item
      v-show="(state.isLogin === true && state.isPwd === true) || state.forgetPwd"
      name="password"
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <span>密码</span>
      <n-input type="password" v-model:value="formState.password" placeholder="请输入密码">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item
      v-show="state.isLogin === false || state.isPwd === false"
      name="captcha"
      :rules="[{ required: true, message: '请输入图形验证码!' }]"
    >
      <n-input-group compact>
        <span>图形验证码</span>
        <n-input v-model:value="formState.captcha" style="width: 40%" placeholder="请输入" />
        <img :src="captchaSrc" style="max-height: 34px; width: 31%" @click="resetCaptcha('')" />
      </n-input-group>
    </n-form-item>
    <!-- 验证码 -->
    <n-form-item
      v-show="state.isLogin === false || state.isPwd === false"
      name="password"
      :rules="[{ required: true, message: '请输入手机验证码!' }]"
    >
      <n-input-group compact>
        <span>短信验证码</span>
        <n-input v-model:value="formState.code" style="width: 40%" />
        <n-button type="primary" @click="getCode" :disabled="isDisable">{{
          isDisable ? `${countDown}s后重新获取` : '获取验证码'
        }}</n-button>
      </n-input-group>
    </n-form-item>
    <n-form-item style="justify-content: flex-end" flex>
      <n-button
        v-show="state.forgetPwd === false && state.isLogin !== state.isPwd"
        text
        type="info"
        class="login-form-forgot"
        @click="pwdOrCode(true)"
      >
        密码登录
      </n-button>
      <n-button
        v-show="state.isLogin === true && state.isPwd === true"
        text
        type="info"
        dashed
        @click="pwdOrCode(false)"
      >
        手机验证码登录
      </n-button>
    </n-form-item>
    <n-form-item
      style="justify-content: flex-end"
      v-show="state.isPwd === true && state.isLogin === true"
    >
      <n-button text type="warning" dashed @click="forgetPwdSet"> 忘记密码 </n-button>
    </n-form-item>
    <n-form-item flexc>
      <div flexc class="btn-box">
        <n-button
          v-show="state.isLogin && state.forgetPwd === false"
          :disabled="disabled"
          type="primary"
          html-type="submit"
          @click="loginBtn"
        >
          登录
        </n-button>
        <n-button
          v-show="state.isLogin === false && state.forgetPwd === false"
          :disabled="disabled"
          type="primary"
          html-type="submit"
          @click="registerBtn"
          style="width: 120px"
        >
          注册
        </n-button>
        <n-button
          v-show="state.forgetPwd === true"
          :disabled="disabled"
          type="primary"
          html-type="submit"
          @click="saveUserBtn"
        >
          保存
        </n-button>
        <a v-show="state.forgetPwd === true" @click="state.forgetPwd = false">取消</a>
        <n-button
          @click="changeLoginOrReg(false)"
          v-show="state.isLogin === true && state.forgetPwd === false"
          type="success"
          dashed
          text
        >
          去注册
        </n-button>
        <n-button
          v-show="state.isLogin === false"
          type="success"
          @click="changeLoginOrReg(true)"
          text
        >
          去登录
        </n-button>
      </div>
    </n-form-item>
  </n-form>
</template>
<style lang="scss" scoped>
.n-form-item {
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  span {
    display: block;
    color: #333;
    text-align: left;
    width: 110px;
    margin: auto 0;
  }
  .btn-box {
    width: 100%;
    .n-button {
      margin: 0 20px;
      width: 100px;
      height: 3em;
      border-radius: 3em;
    }
  }
}
// :v-deep(.n-form-item .n-form-item-label) {
//   width: 110px !important;
// }
</style>
