import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type ProfileType, type ProfileScheme } from "../types/types";
import { fetchProfile } from "../services/fetchProfile";
import { udpateProfile } from "../services/udpateProfile";

const initialState: ProfileScheme = {}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfile(state, action: PayloadAction<boolean>) {
      state.readonly = action.payload
      if (action.payload) {
        state.form = state.data
      }
    },
    setStringProfile(state, action) {
      state.form = { ...state.form, ...action.payload }
    }
  },
  extraReducers({ addCase }) {
    addCase(fetchProfile.pending, (state) => {
      state.isLoading = true
      state.error = ""
      state.readonly = true
    })
    addCase(fetchProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
      state.isLoading = false
      state.error = ""
      state.data = action.payload
      state.form = action.payload
    })
    addCase(fetchProfile.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false
      state.error = action.payload || "error"
      state.readonly = true
    })
    addCase(udpateProfile.pending, (state) => {
      state.isLoading = true
      state.error = ""
      state.readonly = true
    })
    addCase(udpateProfile.fulfilled, (state, action: PayloadAction<ProfileType>) => {
      state.isLoading = false
      state.error = ""
      state.data = action.payload
      state.form = action.payload
    })
    addCase(
      udpateProfile.rejected, (state, action: PayloadAction<string | undefined>
      ) => {
        state.isLoading = false
        state.error = action.payload || "error"
        state.readonly = true
      })
  },
})

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
