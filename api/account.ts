export const register = async (options: { code: string; phone: string }) => {
  return await useApi('/user/v1/register', {
    method: 'post',
    body: { code: options.code, phone: options.phone }
  })
}
