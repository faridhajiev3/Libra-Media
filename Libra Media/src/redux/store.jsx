import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/slice/productSlice"
import detailReducer from "../redux/slice/detailSlice"


export const store = configureStore({
  reducer: {
    products: productsReducer,
    detail: detailReducer,
  },
});
