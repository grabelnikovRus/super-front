import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type LoginSchema } from "../types/loginSchema";
import { loginByUser } from "../services/loginByUser";

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginByUser.pending, (state) => {
      state.isLoading = true;
    });
    addCase(loginByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
    });
    addCase(loginByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
