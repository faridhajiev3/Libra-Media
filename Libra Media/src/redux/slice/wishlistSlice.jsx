import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const storedLikes = localStorage.getItem("wishlistLikes")

const initialState = {
    likes: storedLikes ? JSON.parse(storedLikes) : [],
};

const wishlistSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        setWishList: (state, action) => {
            const exists = state.likes.find((like) => like.id === action.payload.id)
            if (exists) {
                state.likes = state.likes.filter((like) => like.id !== action.payload.id)
            } else {
                state.likes.push(action.payload)
            }

            localStorage.setItem("wishlistLikes", JSON.stringify(state.likes));
        },
        clearLikes: (state) => {
            state.likes = [];
            localStorage.removeItem("wishlistLikes")
        }
    }
})

export const { setWishList, clearLikes } = wishlistSlice.actions

export default wishlistSlice.reducer