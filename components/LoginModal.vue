<script lang="ts" setup>
const { loginModel } = $(useModel())
const emit = defineEmits(['cancel'])
const closeLoginModal = () => {
  loginModel.base = false
  emit('cancel')
}
const showModal = ref(false)
</script>

<template>
  <n-modal v-model:show="loginModel.base">
    <n-card
      style="width: 600px"
      title="登录"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <!-- <slot /> -->
      <template #footer>
        <n-button>登录</n-button>
        <n-button>注册</n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<style lang="less" scoped>
.login-modal {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1100;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  z-index: 1200;
  width: 640px;
  height: 420px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
}

.colse-btn {
  //   position: absolute;
  float: right;
}
</style>
