import type { ICategoryList } from '~/types/api'

export const getCategory = async () => {
  return await useApi<ICategoryList[]>('/product/v1/category')
}
