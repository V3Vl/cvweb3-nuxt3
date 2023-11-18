<script setup lang="ts">
const { loginModel } = $(useModel())
const { personalInfo } = $(useUser())
import { message } from 'ant-design-vue'
import { getUserInfo } from '~/api/account'
const onCancel = () => {
  loginModel.base = false
}
</script>

<template>
  <div class="header">
    <div class="center-tab">
      <NuxtLink to="/">
        <menu-outlined style="font-size: 22px" />
      </NuxtLink>
      <!-- <div class="tab-a" flexc>
        <NuxtLink target="_blank">链接1</NuxtLink>
        <NuxtLink target="_blank">链接2</NuxtLink>
        <NuxtLink target="_blank">链接3</NuxtLink>
      </div> -->
      <HeaderSearch />
    </div>
    <NuxtLink class="logo" to="/" felxc>
      <!-- <img src="/images/logo.png" m-2 alt="磐石东方精品国际商城" /> -->
      <span>K e y i</span>
    </NuxtLink>
    <HeaderUser />
  </div>
  <LoginModal v-if="loginModel.base" @cancel="onCancel">
    <LoginForm></LoginForm>
  </LoginModal>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  // flex-basis: 1200px;
  display: flex;
  font-size: 16px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
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
  border-radius: 22px;
  line-height: 36px;
  align-items: center;
  text-align: center;
  background-color: rgba(250, 250, 250, 0.1);
  img {
    width: 34px;
    height: 34px;
  }
  span {
    font-size: 24px;
    margin: auto 0;
    line-height: 34px;
    font-weight: 1000;
    color: #fff;
  }
}
.logo:hover {
  background-color: rgba(250, 250, 250, 0.16);
}
.header:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
