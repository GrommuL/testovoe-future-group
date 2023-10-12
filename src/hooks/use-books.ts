import { instance } from '@/config/axios-config/axios-config'
import { envConfig } from '@/config/env-config/env-config'
import { booksActions } from '@/store/slices/books-slice'
import { BookApiResponse } from '@/types/books-type'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/use-app-dispatch'
import { useAppSelector } from './redux/use-app-selector'

export const useBooks = () => {
  const dispatch = useAppDispatch()
  const {
    setStatus,
    addErrorMessage,
    getBooks,
    getNumberOfBooksFound,
    getMoreBooks
  } = booksActions
  const { category, searchValue, sortBy } = useAppSelector(
    (state) => state.filterReducer
  )
  const { isLoading, books, numberOfBooksFound, startIndex } = useAppSelector(
    (state) => state.booksReducer
  )

  const fetchBooks = async () => {
    const categoryValue = category === 'all' ? '' : category
    try {
      dispatch(setStatus(true))
      const { data }: { data: BookApiResponse } = await instance.get(
        `/v1/volumes?q=intitle:${searchValue}+subject:${categoryValue}&orderBy=${sortBy}&key=${envConfig.API_KEY}`
      )
      dispatch(getBooks(data.items))
      dispatch(getNumberOfBooksFound(data.totalItems))
      dispatch(setStatus(false))
    } catch (error) {
      dispatch(setStatus(false))
      dispatch(addErrorMessage('Error receiving books'))
    } finally {
      dispatch(setStatus(false))
    }
  }

  const getMore = async () => {
    const categoryValue = category === 'all' ? '' : category
    try {
      const { data }: { data: BookApiResponse } = await instance.get(
        `/v1/volumes?q=intitle:${searchValue}+subject:${categoryValue}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=30&key=${envConfig.API_KEY}`
      )
      dispatch(getMoreBooks(data.items))
    } catch (error) {
      dispatch(addErrorMessage('Error receiving books'))
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [searchValue, category, sortBy])

  return { isLoading, books, numberOfBooksFound, fetchBooks, getMore }
}
