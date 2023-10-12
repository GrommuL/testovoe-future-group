import { instance } from '@/config/axios-config/axios-config'
import { currentBookActions } from '@/store/slices/current-book-slice'
import { BookItem } from '@/types/books-type'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/use-app-dispatch'
import { useAppSelector } from './redux/use-app-selector'

export const useCurrentBook = (bookId?: string) => {
  const dispatch = useAppDispatch()
  const { addBook, setCurrentBookError, setIsLoading } = currentBookActions
  const { book, isLoading } = useAppSelector(
    (state) => state.currentBookReducer
  )
  const formattedAuthors = book?.volumeInfo?.authors?.join(', ')
  const formattedCategories = book?.volumeInfo.categories?.[0]

  const getBookById = async (bookId: string) => {
    dispatch(setIsLoading(true))
    try {
      const { data }: { data: BookItem } = await instance.get(
        `v1/volumes/${bookId}`
      )
      dispatch(addBook(data))
      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setCurrentBookError('Error receiving book'))
      dispatch(setIsLoading(false))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  useEffect(() => {
    if (bookId) getBookById(bookId)
  }, [bookId])

  return { book, formattedAuthors, formattedCategories, isLoading }
}
