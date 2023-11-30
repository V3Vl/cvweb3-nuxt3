<script setup lang="ts">
const { loginModel } = $(useModel())
const { personalInfo } = $(useUser())
const props = defineProps({
  activeKeyEmit: Number
})
const topTips = ref('删库，重新认识Nuxt')
const headBgColor = ref('rgba(0, 0, 0, 0)')
const route = useRoute()
const onCancel = () => {
  loginModel.base = false
}
</script>

<template>
  <div class="header" border>
    <div class="tab-left">
      <nav>
        <a href="#">首页</a>
        <a href="#">关于我们</a>
        <a href="#">服务</a>
        <a href="#">联系我们</a>
      </nav>
      <HeaderSearch />
    </div>
    <NuxtLink class="logo" to="/" felxc border>
      <span>{{ topTips }}</span>
    </NuxtLink>
    <HeaderUser />
  </div>
  <LoginModal v-if="loginModel.base" @cancel="onCancel">
    <LoginForm></LoginForm>
  </LoginModal>
</template>

<style lang="scss" scoped>
.header {
  z-index: 990;
  top: 0;
  right: 0;
  width: 100%;
  height: 50px;
  // padding: 0 10px;
  display: flex;
  font-size: 16px;
  align-items: center;
}
.tab-left {
  flex: 0.4;
  align-items: center;
  display: flex;
}
.logo {
  flex: 0.2;
  border-radius: 22px;
  line-height: 36px;
  align-items: center;
  text-align: center;
  background-color: rgba(250, 250, 250, 0.1);
  span {
    font-size: 1.8rem;
    line-height: 34px;
    font-weight: 1000;
  }
}
.logo:hover {
  background-color: rgba(250, 250, 250, 0.5);
  transition: color 0.3s ease-in-out;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: color;
}
</style>
