import { Button } from '@/components/shared/button'
import { Input } from '@/components/shared/input'
import { SearchIcon } from '@/components/shared/icons/search-icon'
import { useSearch } from '@/hooks/use-search'
import { Select } from '@/components/shared/select'
import { categories } from '@/common/categories'
import { sortByList } from '@/common/sort-by'
import { useAppSelector } from '@/hooks/redux/use-app-selector'
import { CategoriesType, SortByType } from '@/types/filter-type'

import style from './header.module.scss'

export const Header = () => {
  const { category, sortBy } = useAppSelector((state) => state.filterReducer)
  const { getSearchValue, getCategoryValue, getSortByValue } = useSearch()

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header_content}>
          <h2 className={style.header_title}>Search for books</h2>
          <form className={style.header_search} onSubmit={getSearchValue}>
            <Input
              leftIcon={<SearchIcon />}
              placeholder='Find a book...'
              type='search'
            />
            <Button type='submit'>Search</Button>
          </form>
          <div className={style.header_filters}>
            <Select
              options={categories}
              value={category}
              setValue={(value) => getCategoryValue(value as CategoriesType)}
            />
            <Select
              options={sortByList}
              value={sortBy}
              setValue={(value) => getSortByValue(value as SortByType)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
