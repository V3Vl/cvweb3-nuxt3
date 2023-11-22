<script setup lang="ts">
const { loginModel } = $(useModel())
const { personalInfo } = $(useUser())
const props = defineProps({
  activeKeyEmit: String
})
const activeKeyEmitOn = ref(props.activeKeyEmit)
watch(
  () => props.activeKeyEmit,
  (newValue, oldValue) => {
    activeKeyEmitOn.value = newValue
  }
)
const onCancel = () => {
  loginModel.base = false
}
</script>

<template>
  <div
    :style="{
      position: 'fixed',
      backgroundColor: activeKeyEmitOn === '2' ? '#000' : 'rgba(0, 0, 0, 0)'
    }"
    class="header"
  >
    <div class="center-tab">
      <HeaderSearch />
    </div>
    <NuxtLink class="logo" to="/" felxc>
      <!-- <dot-chart-outlined /> -->
      <span>K e </span>
      <yahoo-outlined />
      <!-- <span> i</span> -->
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
  padding: 0 10px;
  display: flex;
  font-size: 16px;
  align-items: center;
}
.center-tab {
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
    color: rgb(247, 248, 234);
    font-size: 1.8rem;
    margin: auto 0;
    line-height: 34px;
    font-weight: 1000;
  }
}
.logo:hover {
  span {
    color: #fff;
    font-size: 1.85rem;
  }
  background-color: rgba(250, 250, 250, 0.3);
  transition: color 0.3s ease-in-out;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: color;
}
.header:hover {
  background-color: rgba(0, 0, 0, 1);
}
</style>
