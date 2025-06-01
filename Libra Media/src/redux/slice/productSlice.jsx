import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../api/api";

const initialState = {
  items: [],
  status: "idle", 
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await fetchProducts();
    return data;
  }
);

const productsSlice = createSlice({ 
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
