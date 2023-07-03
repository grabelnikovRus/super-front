import { createSlice } from "@reduxjs/toolkit";
import { type ProfileScheme } from "../types/types";

const initialState: ProfileScheme = {}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {

  }
})

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
