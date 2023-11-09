<script setup lang="ts">
const { loginModel } = $(useModel())
interface FormState {
  username: string
  nickname: string
  password: string
  captcha: string
  code: string
  remember: boolean
}
let formState = reactive<FormState>({
  username: '',
  nickname: '',
  password: '',
  captcha: '',
  code: '',
  remember: false
})
const onCancel = () => {
  // clearInterval()
  loginModel.base = false
  formState = {} as FormState
  console.log('onCancel>>>', loginModel.base, formState)
}
const onLoginOrReg = () => {
  // formState = {} as FormState;
  formState = {
    username: '',
    nickname: '',
    password: '',
    remember: false,
    captcha: '',
    code: ''
  }
  console.log('onLoginOrReg>>>', formState)
}
</script>

<template>
  <!-- <div class="header-container"> -->
  <div class="header">
    <div class="center-tab">
      <NuxtLink to="/">目录</NuxtLink>
      <div class="tab-a" flexc>
        <NuxtLink target="_blank">链接1</NuxtLink>
        <NuxtLink target="_blank">链接2</NuxtLink>
        <NuxtLink target="_blank">链接3</NuxtLink>
      </div>
      <HeaderSearch />
    </div>
    <NuxtLink class="logo" to="/" felxc>
      <!-- <img src="/images/logo.png" m-2 alt="磐石东方精品国际商城" /> -->
      <span>eShop.com</span>
    </NuxtLink>
    <div class="login-or-registory">
      <a-button @click="loginModel.base = true">
        <template #icon><user-outlined /></template>
        登录
      </a-button>
    </div>
  </div>
  <LoginModal v-if="loginModel.base" @cancel="onCancel">
    <LoginForm :formState="formState" @loginOrReg="onLoginOrReg"></LoginForm>
  </LoginModal>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 44px;
  padding: 0 10px;
  // flex-basis: 1200px;
  display: flex;
  font-size: 16px;
  align-items: center;
  background-color: #f5f5f5;
}
.center-tab {
  flex: 0.4;
  align-items: center;
  display: flex;
  .tab-a {
    display: flex;
    justify-content: center;
    flex: 0.9;
  }
}
a {
  text-decoration: none;
  color: #4f555d;
  margin: 0 5px;
}
a:hover {
  color: #f38e48;
}
.logo {
  flex: 0.2;
  align-items: center;
  text-align: center;
  img {
    width: 34px;
    height: 34px;
  }
  span {
    font-size: 24px;
    margin: auto 0;
    line-height: 34px;
  }
}

.login-or-registory {
  flex: 0.4;
  display: flex;
  justify-content: flex-end;
}
.active {
  color: #f38e48;
}
</style>
