/**
 * @params getWechat 获取二维码接口
 * @params 轮询接口-查询用户是否扫码
 */
// import type { IWechat } from '~/types/api'

export const getWechat = async () => {
  // return await useApi<IWechat>('/wx_login/v1/login')
  return await useApi('/wx_login/v1/login')
}
export const checkScan = async (options: { ticket: string }) => {
  // return await useApi<null>('/wx_login/v1/check_scan', {
  return await useApi('/wx_login/v1/check_scan', {
    params: options
  })
}
