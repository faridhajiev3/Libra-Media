import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategory } from "../../api/api";

const initialState = {
    itemsCategory: [],
    status: "idle",
};

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async () => {
        const data = await fetchCategory();
        return data;
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.itemsCategory = action.payload;
                state.status = "succeeded";
            })
            .addCase(getCategory.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default categorySlice.reducer;