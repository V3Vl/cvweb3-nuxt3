<script setup lang="ts">
const { loginModel } = $(useModel())
const { isLogin, personalInfo, logout } = $(useUser())
import { message } from 'ant-design-vue'
import type { MenuProps } from 'ant-design-vue'
import { CSSProperties } from 'vue'
const logoutVisible = ref<boolean>(false)
const confirmLoading = ref<boolean>(false)
const modalText = ref<string>(`确定退出账号${personalInfo.phone}？`)
const drawerFooterStyle: CSSProperties = {
  height: '100px',
  textAlign: 'center'
}
const handleMenuClick: MenuProps['onClick'] = (e) => {
  if (e.key === '1') {
    drawerVisible.value = true
  }
}
const handleOk = () => {
  confirmLoading.value = true
  logout()
  if (isLogin === false) {
    setTimeout(() => {
      logoutVisible.value = false
      confirmLoading.value = false
      message.success('退出登录成功')
    }, 700)
  }
}
let drawerVisible = ref<boolean>(false)
const onClose = () => {
  drawerVisible.value = false
}
</script>

<template>
  <div class="login-or-registory" h-11>
    <div v-if="isLogin">
      <div id="components-dropdown-demo-placement">
        <a-dropdown placement="bottomRight">
          <!-- <a-badge> -->
          <!-- shape="square" 方形头像 -->
          <a-avatar class="avatar-img" :src="personalInfo.head_img" @click="drawerVisible = true" />
          <!-- </a-badge> -->
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="1">
                <a target="_blank" rel="noopener noreferrer">个人中心</a>
              </a-menu-item>
              <a-menu-item key="2">
                <a target="_blank" rel="noopener noreferrer" @click="logoutVisible = true"
                  >退出登录</a
                >
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <br />
      <a-modal
        width="320px"
        v-model:visible="logoutVisible"
        title="确认提示"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        okType="primary"
        cancelText="取消"
        okText="确认退出"
      >
        <p>{{ modalText }}</p>
      </a-modal>
      <!-- class="drawer-box" -->
      <a-drawer
        :footerStyle="drawerFooterStyle"
        placement="right"
        :closable="false"
        :visible="drawerVisible"
        @close="onClose"
      >
        <div
          style="height: 100%; position: relative; border: #b9d7ff 2px solid"
          class="userinfo-box"
        >
          <div class="head">
            <!-- 信息 -->
            <img :src="personalInfo.head_img" alt="头像" />
            <p>{{ personalInfo.nickname }}</p>
            <p>{{ personalInfo }}</p>
          </div>
          <div border><p>功能...</p></div>
        </div>
        <template #footer>
          <div lh-20>
            <a-button @click="logoutVisible = true">退出登录</a-button>
          </div>
        </template>
      </a-drawer>
    </div>
    <!-- 待补充：isLogin判断显示登录或者个人头像 -->
    <a-button m="9px 4px 0 0" v-if="!isLogin" @click="loginModel.base = true">
      <template #icon><user-outlined /></template>
      登录
    </a-button>
  </div>
</template>

<style lang="less" scoped>
.login-or-registory {
  position: relative;
  flex: 0.4;
  display: flex;
  justify-content: flex-end;

  .avatar-img {
    height: 44px;
    width: 44px;
    cursor: pointer;
    // margin: 3px 4px 0 0;
    border: #b9d7ff 2px solid;
  }
  .userinfo-box {
    .logout-btn {
      position: fixed;
      color: #b9d7ff;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
