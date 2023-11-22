<script setup lang="ts">
import { message } from 'ant-design-vue'
import type { MenuProps } from 'ant-design-vue'
import { CSSProperties } from 'vue'
const { loginModel } = $(useModel())
const { isLogin, personalInfo, logout } = $(useUser())
const logoutVisible = ref<boolean>(false)
const confirmLoading = ref<boolean>(false)
import { getRoleMenuList } from '~/api/account'
import { IRoles } from '~/types/api'
const modalText = ref<string>(`确定退出账号${personalInfo.phone}？`)

const menuItems = ref<IRoles[]>([])

const getRoleMenu = async (permissions: number) => {
  console.log(permissions, personalInfo)
  const res = await getRoleMenuList(permissions)
  menuItems.value = res
}

const itemsPerRow = 3
const isLastRowLeft = computed(() => {
  return menuItems.value.length % itemsPerRow !== 0
})
const drawerVisible = ref<boolean>(false)
onMounted(() => {
  if (isLastRowLeft.value) {
    const userMenu = document.querySelector('.user-menu')
    if (userMenu) {
      userMenu.classList.add('last-row-left')
    }
  }
  watch(
    () => drawerVisible.value,
    async (n, o) => {
      if (n === true) await getRoleMenu(personalInfo.position)
    }
  )
})

const drawerFooterStyle: CSSProperties = {
  height: '100px',
  textAlign: 'center'
}
const drawerBodyStyle: CSSProperties = {
  backgroundColor: ''
}
const handleMenuClick: MenuProps['onClick'] = async (e) => {
  if (e.key === '1') {
    drawerVisible.value = true
  }
}

const handleOk = () => {
  confirmLoading.value = true
  logout()
  if (isLogin === false) {
    // 异步存在问题，待审查优化
    // setTimeout(() => {
    logoutVisible.value = false
    confirmLoading.value = false
    message.success('退出登录成功')
    // }, 700)
  }
}
const onClose = () => {
  drawerVisible.value = false
}
</script>

<template>
  <div class="login-or-registory" h-11>
    <div v-if="isLogin">
      <div id="components-dropdown-demo-placement">
        <a-dropdown placement="bottomRight">
          <a-avatar
            v-if="isLogin"
            class="avatar-img"
            :src="personalInfo.head_img"
            @click="drawerVisible = true"
          />
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
      <a-drawer
        flexc
        :bodyStyle="drawerBodyStyle"
        :footerStyle="drawerFooterStyle"
        placement="right"
        :closable="false"
        :visible="drawerVisible"
        @close="onClose"
      >
        <div>
          <a-avatar
            style="
              display: block;
              margin: 0 auto;
              width: 5.5rem;
              height: 5.5rem;
              border: #00dc82 2px solid;
            "
            :src="personalInfo.head_img"
            @click="drawerVisible = true"
          />
          <span class="block text-center" style="position: relative; font-size: 20px">
            {{ personalInfo.nickname }}
          </span>
          <span class="block text-center"><tablet-two-tone /> {{ personalInfo.phone }}</span>
          <bank-two-tone /><span style="font-size: 0.6rem">地址 - {{ personalInfo.city }}</span>
        </div>
        <a-divider />
        <a-card class="vip-card" hoverable style="width: 310px">
          <div text-center>VIP</div>
        </a-card>
        <div class="user-menu">
          <a-card-grid
            text-center
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-item"
          >
            <account-book-filled />
            {{ item.name }}
          </a-card-grid>
          <!-- <a-card class="user-menu">
          <a-card-grid v-for="(item, index) in menuItems" class="menu-item" :key="index">
            {{ item.name }}
          </a-card-grid>
        </a-card> -->
        </div>
        <template #footer>
          <div lh-20>
            <a-button @click="logoutVisible = true">退出登录</a-button>
          </div>
        </template>
      </a-drawer>
    </div>
    <a-button m="9px 4px 0 0" v-if="!isLogin" @click="loginModel.base = true">
      <template #icon><user-outlined /></template>
      登录
    </a-button>
  </div>
</template>

<style lang="scss" scoped>
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
}
.vip-card {
  margin: 20px auto;
  height: 180px;
  width: 310px;
  border-radius: 12px;
  background-color: #b9ebff;
}
.user-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  :deep(.ant-card-grid) {
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
  }
  .menu-item {
    // background-color: #b9ebff;
    color: #333;
    flex: 0 0 calc(33.33% - 10px);
  }
  .menu-item:hover {
    font-size: 0.8rem;
    background-color: rgb(196, 153, 236);
    color: #fff;
    transition: color 0.3s ease-in-out;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: color;
  }

  &.last-row-left {
    justify-content: flex-start;

    .menu-item:nth-last-child(-n + 3) {
      flex: 1;
    }
  }
}
</style>
