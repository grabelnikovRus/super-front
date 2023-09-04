import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ScrollInfoType, type ScrollScheme } from "../types";


const initialState: ScrollScheme = {}

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    saveScroll: (state, { payload }: PayloadAction<ScrollInfoType>) => {
      state[payload.pathname] = payload.position
    },
  },
});

export const { actions: scrollActions, reducer: scrollReducer } = scrollSlice;
