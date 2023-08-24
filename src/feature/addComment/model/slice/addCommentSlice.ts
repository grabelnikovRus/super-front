import { createSlice } from "@reduxjs/toolkit";
import { type AddCommentSchema } from "../types";

const initialState: AddCommentSchema = {
  text: "",
};

const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentActions, reducer: addCommentReducer } = addCommentSlice;
