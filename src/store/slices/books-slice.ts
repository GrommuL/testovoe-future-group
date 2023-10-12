import { BookItem } from '@/types/books-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BooksState {
  books: BookItem[]
  numberOfBooksFound: number
  startIndex: number
  isLoading: boolean
  error: string
}

const initialState: BooksState = {
  books: [],
  numberOfBooksFound: 0,
  startIndex: 10,
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
    },
    getMoreBooks: (state, action: PayloadAction<BookItem[]>) => {
      state.books = [...state.books, ...action.payload].filter(
        (item, idx, array) =>
          array.findIndex((element) => element.id === item.id) === idx
      )
      state.startIndex = state.books.length
    }
  }
})

export const { actions: booksActions } = booksSlice
export const { reducer: booksReducer } = booksSlice
