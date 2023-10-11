import { CategoriesType } from '@/types/filter-type'
import { SelectType } from '@/types/select-type'

export const categories: SelectType<CategoriesType> = {
  selectTitle: 'categories',
  selectItems: [
    'all',
    'art',
    'biography',
    'computers',
    'history',
    'medical',
    'poetry'
  ]
}
