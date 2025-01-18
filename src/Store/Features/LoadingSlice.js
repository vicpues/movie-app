import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
    initialState: false,
    name: "LoadingSlice",
    reducers : {
        setLoading: (state, action) => {
            return action.payload
        },
    },
});

export const { setLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;