import type { ICategoryList } from '~/types/api'

export const getCategory = async (gmt_modified: string) => {
  return await useApi<ICategoryList[]>('/product/v1/category', {
    params: { gmt_modified }
  })
}
