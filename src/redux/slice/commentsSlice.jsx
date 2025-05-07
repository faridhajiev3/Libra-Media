import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.unshift(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
