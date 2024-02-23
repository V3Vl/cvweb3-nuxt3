/**
 * 接口数据类型
 * 方法1：快捷键转换crtl+shift+alt+v 选择ts 输入接口名
 * 方法2：自动转换工具 https://quicktype.io/
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

export interface IPCRankMenuContents {
  id: number
  pid: string
  img: null
  title: string
  categoryId: null
  isHot: string
}

export interface ICategoryList {
  id: number
  title: string
  pid: string
  gmt_modified?: string
  PCRankMenuContents?: IPCRankMenuContents
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
  position: number
  slogan: string
  sex: string
  city: null
  role: null
  read_time: null
  openid: null
}
export interface IRoles {
  name: string
  permissions: number
}
export interface ILoginFormState {
  username: string
  nickname: string
  password: string
  captcha: string
  code: string
  remember: boolean
}
export interface ILoginState {
  isLogin: boolean
  isPwd: boolean
  checked: boolean
  forgetPwd: boolean
}
export interface IVideoList {
  playResult: string
  episodeId: string
}
export interface IDanmu {
  id: number
  product_id: number
  episode_id: number
  account_id: number
  head_img: string
  username: string
  content: string
  style: null | string
  play_time: number
  source_type: string
  target_url: null | string
  gmt_create: string
  gmt_modified: string
  del: number
}
