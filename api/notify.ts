// 接口请求

export const sendCode = async (phone: string, captcha: string, type: string) => {
  return await useApi('/notify/v1/send_code', {
    method: 'post',
    body: { phone, captcha, type }
  })
}
