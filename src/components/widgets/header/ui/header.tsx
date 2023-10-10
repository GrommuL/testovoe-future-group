import { Button } from '@/components/shared/button'
import { Input } from '@/components/shared/input'
import { SearchIcon } from '@/components/shared/icons/search-icon'
import { useSearch } from '@/hooks/use-search'

import style from './header.module.scss'

export const Header = () => {
  const { getSearchValue } = useSearch()

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header_content}>
          <form className={style.header_search} onSubmit={getSearchValue}>
            <Input leftIcon={<SearchIcon />} placeholder='Find a book...' />
            <Button type='submit'>Search</Button>
          </form>
          <div></div>
        </div>
      </div>
    </header>
  )
}
