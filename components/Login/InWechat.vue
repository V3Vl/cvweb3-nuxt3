<template>
  <div>
    <div mt-10px mb-20px>
      <!-- {{ parentLoginType }} -->
      <a-image style="cursor: pointer" :width="180" :height="180" :src="qrcodeUrl" />
    </div>
    <h3 fs-50 class="font-bold">使用微信扫描二维码</h3>
  </div>
</template>
<script setup lang="ts">
import { toNumber } from '@vue/shared'
import { message } from 'ant-design-vue'
import { getWechat, checkScan } from '~/api/wechat'
const { loginModel } = $(useModel())
const { setLoginSuccState } = $(useUser())
props: {
  parentLoginType: String
}
let lock = $ref(true) //防抖
let qrcodeUrl = $ref(null)
let timer = $ref(null)
const props = defineProps({
  parentLoginType: String
})
const getQrCode = async () => {
  // 目前会先轮询1次才获取到二维码，待优化为第1次不需要等待轮询
  if (lock) {
    lock = false
    const res = await getWechat()
    if (res.code === 0) {
      qrcodeUrl = res.data.qrcodeUrl
      lock = true
      // 轮询请求-是否扫码checkScan
      timer = setInterval(() => watchCheckScan(res.data.ticket), 1500)
    }
  }
}
// 调用
await getQrCode()
const watchCheckScan = async (ticket: string) => {
  const res = await checkScan(ticket)
  if (res.code === 0) {
    // 扫码登陆成功后的操作 关闭登录框...
    clearInterval(timer)
    console.log('已扫码', timer, res)
    setLoginSuccState(res.data)
    loginModel.base = false
    message.success('登录成功')
  }
}
onMounted(() => {
  // 切换登录方式时清除轮询
  watch(
    () => props.parentLoginType,
    (nVal, oVal) => {
      if (nVal !== 'wechat') {
        // 销毁 停止轮询
        clearInterval(timer)
      } else {
        getQrCode()
      }
    }
  )
})
onBeforeUnmount(() => {
  clearInterval(timer)
})

// 手动关闭登录框/切换登录方式 -> 清除定时器
</script>
<style lang="scss" scoped></style>
