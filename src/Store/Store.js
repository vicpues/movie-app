import { configureStore } from '@reduxjs/toolkit'
import ListSearch  from './Features/ListSearch'
export const store = configureStore({
  reducer: {
    ListSearch: ListSearch,
  },
})