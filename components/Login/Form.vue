<script setup lang="ts">
const emit = defineEmits(["loginOrReg"]);
interface State {
  isLogin: boolean;
  loginType: string;
  checked: boolean;
}
// interface FormState {
//   username: string;
//   nickname: string;
//   password: string;
//   remember: boolean;
// }
const { formState } = defineProps<{
  formState: {
    username: string;
    nickname: string;
    password: string;
    remember: boolean;
  };
}>();
const state = reactive<State>({
  loginType: "test",
  isLogin: true,
  checked: false,
});
const changeLoginType = (_type: string): void => {
  state.loginType = _type;
  console.log(state.loginType);
};
const changeLoginOrReg = (_isLogin: boolean) => {
  state.isLogin = _isLogin;
  console.log(formState);
  // formState = {} as FormState;
  emit("loginOrReg");
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
// const checked = ref(false);
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
    <a-divider
      type="vertical"
      orientation="left"
      style="height: 256px; color: #e3e3e3"
      dashed
    />
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
              :rules="[
                { required: true, message: 'Please input your nickname!' },
              ]"
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
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.username">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
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
            </a-form-item>
            <a-form-item
              v-show="state.isLogin === false"
              label="confirm Password"
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
            </a-form-item>

            <a-form-item v-show="state.isLogin === true">
              <a-form-item name="remember" no-style>
                <a-checkbox v-model:checked="formState.remember"
                  >Remember</a-checkbox
                >
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
              >
                Register
              </a-button>
              <span m="0 10px">Or</span>
              <a
                v-show="state.isLogin === true"
                @click="changeLoginOrReg(false)"
                >register now!</a
              >
              <a
                v-show="state.isLogin === false"
                @click="changeLoginOrReg(true)"
                >Go login!</a
              >
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
