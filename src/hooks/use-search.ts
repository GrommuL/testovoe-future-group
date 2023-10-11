import { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from './redux/use-app-dispatch'
import { filterActions } from '@/store/slices/filter-slice'
import { CategoriesType, SortByType } from '@/types/filter-type'

export const useSearch = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { setSearchValue, setSortBy, setCategory } = filterActions

  const getSearchValue = (e: FormEvent<HTMLFormElement>) => {
    if (pathname !== '/') navigate('/')

    e.preventDefault()

    const searchValue = (e.currentTarget[0] as HTMLInputElement).value
    dispatch(setSearchValue(searchValue))
  }

  const getSortByValue = (value: SortByType) => {
    dispatch(setSortBy(value))
  }

  const getCategoryValue = (value: CategoriesType) => {
    dispatch(setCategory(value))
  }

  return { getSearchValue, getSortByValue, getCategoryValue }
}
