import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedDetail: {},
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setSelectedDetail: (state, action) => {
      state.selectedDetail = action.payload;
    },
  },
});

export const { setSelectedDetail } = detailSlice.actions;

export default detailSlice.reducer;
