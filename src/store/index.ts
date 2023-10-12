import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './slices/books-slice'
import { filterReducer } from './slices/filter-slice'
import { currentBookReducer } from './slices/current-book-slice'

export const store = configureStore({
  reducer: {
    booksReducer,
    filterReducer,
    currentBookReducer
  }
})
