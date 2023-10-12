import { BookItem } from '@/types/books-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CurrentBookState {
  book: BookItem | null
  isLoading: boolean
  error: string
}
const initialState: CurrentBookState = {
  book: null,
  isLoading: false,
  error: ''
}

const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookItem>) => {
      state.book = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setCurrentBookError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})
export const { reducer: currentBookReducer } = currentBookSlice
export const { actions: currentBookActions } = currentBookSlice
