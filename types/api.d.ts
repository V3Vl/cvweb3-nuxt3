/**
 * 接口数据类型
 */
export interface IApiBase<T> {
  code: number
  msg: string
  data: T
}

export interface IWechat {
  qrcodeUrl: string
  ticket: string
}
