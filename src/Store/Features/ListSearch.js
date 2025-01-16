import { createSlice } from "@reduxjs/toolkit";

export const ListSearch = createSlice({
    initialState: "trending",
    name: "ListSearch",
    reducers: {
        setItem: (state, action) => {
            return action.payload
        },
    },
});
export const {setItem} = ListSearch.actions;
export default ListSearch.reducer;