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
  <div style="position: fixed" class="header">
    <div class="center-tab">
      <HeaderSearch />
    </div>
    <NuxtLink class="logo" to="/" felxc>
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
  z-index: 990;
  top: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  font-size: 16px;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
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
</style>
