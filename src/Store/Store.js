import { configureStore } from '@reduxjs/toolkit'
import ListSearch  from './Features/ListSearch'
import SingleQuery from './Features/SingleQuery'
import MovieList from './Features/MoviesList'
export const store = configureStore({
  reducer: {
    ListSearch: ListSearch,
    SingleQuery: SingleQuery,
    MovieList: MovieList,
  },
})