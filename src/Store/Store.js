import { configureStore } from '@reduxjs/toolkit'
import ListSearch  from './Features/ListSearch'
import LoadingSlice from './Features/LoadingSlice'
import MovieList from './Features/MoviesList'
export const store = configureStore({
  reducer: {
    ListSearch: ListSearch,
    LoadingSlice: LoadingSlice,
    MovieList: MovieList,
  },
})