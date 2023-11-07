/**
 * @params getWechat 获取二维码接口
 * @params 轮询接口-查询用户是否扫码
 */
import type { IWechat } from '~/types/api'
export const getWechat = async () => {
  return await useApi<IWechat>('/wx_login/v1/login')
}
export const checkScan = async (ticket: string) => {
  // 因为返回的data是null，msg是string，这里用null
  return await useApi<null>('/wx_login/v1/check_scan'),
// xd使用了params，但data.code报红，待后续检查
  // return (
  //   await useApi<null>('/wx_login/v1/check_scan'),
  //   {
  //     params: { ticket }
  //   }
  // )
}
