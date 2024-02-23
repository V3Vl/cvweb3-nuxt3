<script setup lang="ts">
const route = useRoute()
const { loginModel } = $(useModel())
import type { DrawerPlacement } from 'naive-ui'
const { isLogin } = $(useUser())
const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const onCancel = () => {
  loginModel.base = false
}
</script>

<template>
  <div class="header" wfull flexb>
    <div>
      <n-button text style="font-size: 1.2rem; font-weight: bold" @click="activate('left')"
        >&nbsp=</n-button
      >
    </div>
    <!-- <div class="title" flexb>
      <img src="@/assets/img/logo_cat.png" alt="" srcset="" />
      <span>Keyi</span>
    </div> -->
    <div class="search">
      <n-input-group>
        <n-input style="border-radius: 20px" :style="{ width: '70%' }" />
        <n-button style="border-radius: 20px" ghost> 搜索 </n-button>
      </n-input-group>
    </div>

    <div class="header-right">
      <ul>
        <li>主题</li>
        <li>语言</li>
      </ul>
      <n-button v-if="!isLogin" @click="loginModel.base = true"> 登录 </n-button>
      <HeaderUser v-else />
    </div>
  </div>
  <n-drawer v-model:show="active" width="14rem" :placement="placement">
    <n-drawer-content title="暂无内容"> 配置一些菜单 </n-drawer-content>
  </n-drawer>
  <n-modal v-model:show="loginModel.base" transform-origin="center">
    <n-card class="loginModal" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <LoginForm />
    </n-card>
  </n-modal>
</template>

<style lang="scss" scoped>
.header {
  z-index: 2;
  position: fixed;
  padding: 4px 6px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 3rem;
  background-color: #fff;
  color: #333;
  .search {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    @media screen and (max-width: 599px) {
      /* 手机版样式 */
      width: 60%;
    }
    @media screen and (min-width: 599px) {
      /* PC版样式 */
      width: 30%;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: aqua;
    padding: 0 10px;
    height: 3rem;
    border-radius: 10px;
    img {
      width: 1.9rem;
      height: 1.9rem;
    }
    span {
      margin-left: 8px;
      letter-spacing: 2px;
    }
    font-size: 1.1rem;
    font-weight: 600;
  }
  .header-right {
    display: flex;
    justify-content: end;
    align-items: center;
    ul {
      @media screen and (max-width: 599px) {
        /* 手机版样式 */
        display: none;
      }
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex; /* 设置为弹性容器 */
    }

    li {
      cursor: pointer;
      padding: 15px;
      text-align: center;
      flex: 1; /* 平均分配空间 */
      box-sizing: border-box; /* 防止 padding 影响宽度 */
    }
    li:hover {
      color: lightskyblue;
    }
  }
}
.loginModal {
  width: 420px;
  height: 80vh;
  --n-padding-left: 0 !important;
  --n-padding-bottom: 0 !important;
  padding: 2rem 1rem;
  border-radius: 1.5rem;
  @media screen and (max-width: 599px) {
    height: 78vh;
    width: 92%;
  }
}
</style>
