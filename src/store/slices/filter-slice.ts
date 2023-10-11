import { CategoriesType, SortByType } from '@/types/filter-type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FilterState {
  searchValue: string
  category: CategoriesType
  sortBy: SortByType
}

const initialState: FilterState = {
  category: 'all',
  sortBy: 'relevance',
  searchValue: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoriesType>) => {
      state.category = action.payload
    },
    setSortBy: (state, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    }
  }
})

export const { reducer: filterReducer } = filterSlice
export const { actions: filterActions } = filterSlice
