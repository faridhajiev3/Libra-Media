import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  count: null
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existing = state.cart.find((e) => e.id === action.payload.id);
      if (!existing) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.price || 10,
        });
        state.count++
      } else {
        existing.quantity += 1;
      }
    },
    deleteBasket: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((e) => e.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((e) => e.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToBasket, deleteBasket, incrementQuantity, decrementQuantity } = basketSlice.actions;
export default basketSlice.reducer;
