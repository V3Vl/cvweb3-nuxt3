<template>
  <div>
    <div mt-10px mb-20px>
      <a-image style="cursor: pointer" :width="180" :height="180" :src="qrcodeUrl" />
    </div>
    <h3 fs-50 class="font-bold">使用微信扫描二维码</h3>
  </div>
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue'
import { getWechat, checkScan } from '~/api/wechat'
let lock = $ref(true) //防抖
let qrcodeUrl = $ref(null)
let timer = $ref(null)
const getQrCode = async () => {
  if (lock) {
    lock = false
    const res = await getWechat()
    if (res.code === 0) {
      qrcodeUrl = res.data.qrcodeUrl
      lock = true
      // 轮询请求-是否扫码checkScan
      timer = setInterval(() => watchCheckScan(res.data.ticket), 1000)
    }
  }
}
// 调用
// await getQrCode()
const watchCheckScan = async (ticket: string) => {
  const res = await checkScan(ticket)
  if (res.code === 0) {
    // 成功后 关闭登录框...
    clearInterval(timer)
    message.success('登录成功')
  }
  watch(
    () => xxx,
    (val) => !val && clearInterval(timer)
  )
}
// 手动关闭登录框/切换登录方式 -> 清除定时器
</script>
<style lang="scss" scoped></style>
