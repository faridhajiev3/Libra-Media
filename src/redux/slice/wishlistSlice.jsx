import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  likes: [],
};

const wishlistSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
        setWishList:(state,action)=>{
            const exists  = state.likes.find((like)=>like.id === action.payload.id)
            if(exists){
                state.likes = state.likes.filter((like)=> like.id !== action.payload.id)
            }else{
                state.likes.push(action.payload)
            }
        }
    }
})

export const {setWishList} = wishlistSlice.actions

export default wishlistSlice.reducer