import type { IBannerList } from '~/types/api'

export const getBannerList = async (location: string) => {
  return await useApi<IBannerList>('/banner/v1/list', {
    params: { location }
  })
}
