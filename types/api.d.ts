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

export interface IBannerList {
  id: number
  location: string
  name: string
  img_url: string
  pc_link: string
  h5_link: string
  expired: string
  del: string
  gmt_create: string
  gmt_modified: string
}

export interface ICategoryList {
  id: number
  name: string
  pid: number
  gmt_create: string
  gmt_modified: string
  level: string
  subCategoryList?: ICategoryList[]
}
/**
 * 个人信息
 */
export interface IUserInfo {
  id: number
  nickname: string
  head_img: string
  phone: string
  pwd: string
  position: null
  slogan: string
  sex: string
  city: null
  role: null
  read_time: null
  openid: null
}
