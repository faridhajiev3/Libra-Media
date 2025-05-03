import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empty:""
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearch:(state,action)=>{
            state.empty = action.payload
        }
    }
})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;