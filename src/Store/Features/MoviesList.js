import { createSlice } from "@reduxjs/toolkit";

const MovieList = createSlice({
    initialState: [],
    name: "MovieList",
    reducers: {
        setMovies: (state, action) => {
            return action.payload
        },
    },
});
export const { setMovies } = MovieList.actions;
export default MovieList.reducer;