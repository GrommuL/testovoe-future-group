import { BookItem } from '@/types/books-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BooksState {
  books: BookItem[]
  numberOfBooksFound: number
  isLoading: boolean
  error: string
}

const initialState: BooksState = {
  books: [],
  numberOfBooksFound: 0,
  isLoading: false,
  error: ''
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<BookItem[]>) => {
      state.books = action.payload.filter(
        (item, idx, array) =>
          array.findIndex((element) => element.id === item.id) === idx
      )
    },
    setStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    addErrorMessage: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    getNumberOfBooksFound: (state, action: PayloadAction<number>) => {
      state.numberOfBooksFound = action.payload
    }
  }
})

export const { actions: booksActions } = booksSlice
export const { reducer: booksReducer } = booksSlice
