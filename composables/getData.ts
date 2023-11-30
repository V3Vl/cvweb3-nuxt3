import type { LocationQuery } from 'vue-router'
import type { NitroFetchRequest } from 'nitropack'
// 请求接口封装方式2 - 参考野文方式
interface Params {
  url: NitroFetchRequest
  opts: any
  method?: 'get' | 'post'
}

// 待优化，添加env环境
export const baseUrl = 'http://127.0.0.1:8080/api'

export function getFetchData({ url, opts, method = 'get' }: Params) {
  interface QueryItem {
    uid?: string
    token?: LocationQuery
  }
  const { data } = useFetch(url, {
    method,
    baseURL: baseUrl
    // 请求拦截
    onRequest({request, options}) {
      options.headers = new Headers(options.headers)
    }
  })
}
