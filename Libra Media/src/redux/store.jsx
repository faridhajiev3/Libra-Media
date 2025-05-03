import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/slice/productSlice"
import detailReducer from "../redux/slice/detailSlice"
import basketReducer from "../redux/slice/basketslice"
import searchReducer from "../redux/slice/searchSlice"


export const store = configureStore({
  reducer: {
    products: productsReducer,
    detail: detailReducer,
    basket: basketReducer,
    search: searchReducer,
  },
});
