import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};


const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        addToBasket: (state, action)=>{
            const port = state.cart.find((e)=>e.id == action.payload.id)
            if(!port){
                state.cart.push(action.payload)
            }
        },
        deleteBasket:(state, action)=>{
            state.cart = state.cart.filter((e)=>e.id !== action.payload)
        }
    }
})

export const {addToBasket, deleteBasket} = basketSlice.actions
export default basketSlice.reducer