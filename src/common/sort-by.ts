import { SortByType } from '@/types/filter-type'
import { SelectType } from '@/types/select-type'

export const sortByList: SelectType<SortByType> = {
  selectTitle: 'sort by',
  selectItems: ['relevance', 'newest']
}
