import type { IBannerList } from '~/types/api'

// export const getBannerList = async (location: string) => {
//   return await useApi<IBannerList>('/banner/v1/list', {
//     params: { location }
//   })
// }
// export const getBannerList = async (location: string) => {
//   return await useApi<IBannerList>('/banner/v1/list', {
//     params: { location }
//   })
// }
export const { data, pending, error, refresh } = await useAsyncData('getBannerList', () =>
  $fetch('/banner/v1/list')
)
