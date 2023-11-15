export const register = async (options: { code: string; phone: string; type: string }) => {
  return await useApi('/user/v1/register', {
    method: 'post',
    body: { code: options.code, phone: options.phone, type: options.type }
  })
}
// 待补充 验证码/密码
export const login = async (options: { phone: string; code: string; password: string }) => {
  return await useApi('/user/v1/login', {
    method: 'post',
    body: { phone: options.phone, code: options.code, password: options.password }
  })
}
export const forget = async (options: { phone: string; code: string; password: string }) => {
  return await useApi('/user/v1/forget', {
    method: 'post',
    body: { phone: options.phone, code: options.code, password: options.password }
  })
}
