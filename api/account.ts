import { message } from 'ant-design-vue'
import { IUserInfo } from '~/types/api'
import { IApiBase, IRoles } from '~/types/api'

export const register = async (options: { code: string; phone: string; type: string }) => {
  return await useApi('/user/v1/register', {
    method: 'post',
    body: { code: options.code, phone: options.phone, type: options.type }
  })
}
// 待补充 验证码/密码
export const login = async (options: { phone: string; code?: string; password?: string }) => {
  return await useApi('/user/v1/login', {
    method: 'post',
    body: options
  })
}

export const forget = async (options: { phone: string; code: string; password: string }) => {
  return await useApi<null>('/user/v1/forget', {
    method: 'post',
    body: options
  })
}
// export const getUserInfo = async () => {
//   return await useApi('/user/v1/detail', {
//     method: 'get',
//     body: {}
//   })
// }
export const getUserInfo = async function () {
  return await useApi<IUserInfo>('/user/v1/detail')
}

// export const getRoleMenuList = async (permissions: number) => {
//   return await useApi<IRoles[]>('/user/v1/roles', {
//     params: { permissions }
//   })
// }
export const getRoleMenuList = async function (permissions: number): Promise<IRoles[]> {
  const response = await useApi<IRoles[]>('/user/v1/roles', {
    params: { permissions }
  })
  if (response.code === -1) return message.error(response.msg)
  return response.data
}
