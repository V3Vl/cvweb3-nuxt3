<script lang="ts" setup>
const { loginModel } = $(useModel());
const emit = defineEmits(["cancel"]);
const closeLoginModal = () => {
  loginModel.base = false;
  emit("cancel");
};
</script>

<template>
  <!-- <div b="b white" m="t-6px b-10px" w-200px></div> -->
  <!-- <span text-white text-16px font-600 tracking-8px ml-8px text-center
  >让技术不再难学习</span> -->
  <div class="login-modal">
    <div class="content wfull" p="8px 8px">
      <img
        @click="closeLoginModal"
        src="/images/svg/close_icon.svg"
        class="colse-btn cursor-pointer select-none w-20px! h-20px!"
      />
      <a-divider orientation="left" style="border-color: #e3e3e3"
        ><span fs-22>Login - E Shop</span></a-divider
      >
      <!-- slot 嵌套子组件 -->
      <slot />
    </div>
  </div>
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
