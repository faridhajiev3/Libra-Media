import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/slice/productSlice"
import detailReducer from "../redux/slice/detailSlice"
import basketReducer from "../redux/slice/basketslice"
import searchReducer from "../redux/slice/searchSlice"
import wishlistReducer from "../redux/slice/wishlistSlice"
import commentsReducer from "../redux/slice/commentsSlice"
import addressReducer from "../redux/slice/addressSlice"
import paymentReducer from "../redux/slice/paymentSlice"
import categoryReducer from "../redux/slice/categorySlice"
import authReducer from "../redux/slice/authSlice"


export const store = configureStore({
  reducer: {
    products: productsReducer,
    detail: detailReducer,
    basket: basketReducer,
    search: searchReducer,
    wishlist: wishlistReducer,
    comments: commentsReducer,
    address: addressReducer,
    payment: paymentReducer,
    category: categoryReducer,
    auth: authReducer,
  },
});
