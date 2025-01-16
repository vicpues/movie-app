import { createSlice } from "@reduxjs/toolkit";

const SingleQuery = createSlice({
    initialState: "",
    name: "SingleQuery",
    reducers : {
        setQuery: (state, action) => {
            return action.payload
        },
    },
});

export const {setQuery} = SingleQuery.actions;
export default SingleQuery.reducer;