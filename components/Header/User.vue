<script setup lang="ts">
// import { useMessage } from 'naive-ui'
const { isLogin, personalInfo, logout } = $(useUser())

// const modalText = ref<string>(`确定退出账号${personalInfo.phone}？`)

import { NAvatar, NText } from 'naive-ui'
// const message = useMessage()

const showModal = ref(false)
// const cancelCallback = () => {}
const submitCallback = () => {
  logout()
  console.log('确认')
}
function renderCustomHeader() {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: personalInfo.head_img
      }),
      h('div', null, [
        h('div', null, [
          h(
            NText,
            { depth: 2, style: 'font-size: 1.1em' },
            { default: () => `${personalInfo.nickname} | ${personalInfo.role}` }
          )
        ]),
        h('div', { style: 'font-size: 1em;' }, [
          h(NText, { depth: 3 }, { default: () => '毫无疑问，你是办公室里最亮的崽' })
        ])
      ])
    ]
  )
}

const options = ref([
  {
    key: 'header',
    type: 'render',
    render: renderCustomHeader
  },
  {
    key: 'header-divider',
    type: 'divider'
  },
  {
    label: '用户资料',
    disabled: true,
    key: 'stmt1'
  },
  {
    label: '安全中心',
    disabled: true,
    key: 'stmt2'
  },
  {
    label: '退出登录',
    key: 'stmt3'
  }
])
const handleSelect = (key: string | number) => {
  console.log(key)
  if (key === 'stmt3') {
    showModal.value = true
  }
}
// import { getRoleMenuList } from '~/api/account'
// import { IRoles } from '~/types/api'
// const menuItems = ref<IRoles[]>([])
// 获取用户权限菜单
// const getRoleMenu = async (permissions: number) => {
//   const res = await getRoleMenuList(permissions)
//   console.log('>>>>>>>', permissions, personalInfo, res)
//   menuItems.value = res
// }

const onClose = () => {
  // drawerVisible.value = false
}
</script>

<template>
  <div v-if="isLogin" class="login-or-registory">
    <n-dropdown trigger="hover" @select="handleSelect" :options="options">
      <n-avatar class="avatar-img" round :size="48" :src="personalInfo.head_img" />
      <!-- <n-button>用户资料</n-button> -->
    </n-dropdown>
    <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="确认"
      content="确认退出?"
      positive-text="确认"
      negative-text="算了"
      @positive-click="submitCallback"
    />
  </div>
</template>

<style lang="scss" scoped>
.login-or-registory {
  position: relative;
  display: flex;
  justify-content: flex-end;

  .avatar-img {
    height: 44px;
    width: 44px;
    cursor: pointer;
    // margin: 3px 4px 0 0;
    border: #b9d7ff 1px solid;
  }
}
</style>
