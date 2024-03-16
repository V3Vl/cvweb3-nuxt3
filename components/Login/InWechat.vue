<script lang="ts" setup>
import { getWechat, checkScan } from '~/api/wechat'
const { loginModel } = $(useModel())
const { setLoginSuccState } = $(useUser())
let lock = $ref(true) //防抖
let qrcodeUrl = $ref(null)
let timer: any = $ref(null)
let imgLoading = $ref(false)
// 超时未扫码标志
const loseCount = ref(10)
const props = defineProps({
  parentLoginType: String
})
const getQrCode = async () => {
  loseCount.value = 10
  if (lock) {
    imgLoading = true
    // 进入轮询后置为false，避免重复进入循环；
    lock = false
    const res = await getWechat()
    if (res.code === 0) {
      qrcodeUrl = res.data.qrcodeUrl
      imgLoading = false
      lock = true
      // 轮询请求-是否扫码checkScan
      timer = setInterval(() => watchCheckScan(res.data.ticket), 1500)
    }
  }
}
// 调用
await getQrCode()
const watchCheckScan = async (ticket: string) => {
  const res = await checkScan({ ticket })
  loseCount.value--
  if (res.code === 0) {
    loseCount.value = 10
    // 扫码登陆成功后的操作 关闭登录框...
    clearInterval(timer)
    console.log('已扫码', timer, res)
    setLoginSuccState(res.data)
    loginModel.base = false
    // message.success('登录成功')
  }
}
onMounted(() => {
  // 切换登录方式时清除轮询
  watch(
    () => props.parentLoginType,
    (nVal, oVal) => {
      if (nVal != 'wechat') {
        // 销毁 停止轮询
        clearInterval(timer)
      } else {
        getQrCode()
      }
    }
  ),
    watch(
      () => loseCount.value,
      (nVal, oVal) => {
        console.log('>>>', nVal)
        if (nVal !== 0) return
        // 销毁 停止轮询
        clearInterval(timer)
      }
    )
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  clearInterval(timer)
})

// 手动关闭登录框/切换登录方式 -> 清除定时器
</script>
<template>
  <!-- {{ parentLoginType }} -->
  <div h-199px v-if="loseCount > 0" mt-10px mb-20px>
    <n-spin :show="imgLoading">
      <n-image :width="180" :height="180" :src="qrcodeUrl" preview-disabled />
    </n-spin>
  </div>
  <div h-199px style="line-height: 199px" v-else>
    长时间未操作，请<n-button type="info" text @click="getQrCode">重新获取</n-button>
  </div>
  <h3 fs-50 class="font-bold">使用微信扫描二维码 - {{ loseCount }}s</h3>
</template>
<style lang="scss" scoped></style>
