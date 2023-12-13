import { $fetch } from 'ohmyfetch'
import type { FetchRequest, FetchOptions } from 'ohmyfetch'
import { IApiBase } from '../types/api'
/**
 * import { useMessage } from 'naive-ui'
 * const message = useMessage()
 */

/**
 * 请求封装方式1 - $fetch - 待优化为https
 * $fetch会发起两次请求，1次是服务端，一次是客户端，asyncData只在服务端发起，但是官方推荐$fetch
 * 最优方案等待深入研究
 */
export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8080/api'
    : 'https://api.cvweb3.com/api'
/**
 * tips: Nuxt3使用useFetch和useAsyncData请求接口，但是不利于自定义封装
 * useFetch 和 useAsyncData 都是ohmyFetch封装的
 */
const _useApi = $fetch.create({
  baseURL: baseUrl,
  // 请求拦截器
  async onRequest({ options }) {
    // 请求头headers 如token
    const { token } = $(useUser())
    options.headers = new Headers(options.headers)
    if (token) options.headers.set('authorization', token)
  },

  // 响应拦截器
  async onResponse({ response }) {
    // 接口请求异常捕获
    // 根据不同的返回状态码，返回不同的提示信息
    const data = response._data
    if (data.code !== 0) {
      if (data.code === 270004) return
      // message.warning(data.msg)
    }
  }
})

export const useApi = async <T = any>(request: FetchRequest, options?: FetchOptions<'json'>) => {
  return await _useApi<IApiBase<T>>(request, options)
}
