import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ProfileType } from "../types/types";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { getProfileForm } from "../selectors/getProfileForm/getProfileForm";

export const udpateProfile = createAsyncThunk<ProfileType, undefined, OptionsCreateAsync>(
  "profile/udpateProfile",
  async(_, { rejectWithValue, extra, getState }) => {
    const form = getProfileForm(getState())
    try {
      const response = await extra.api.put("/profile", form)

      return response.data
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message)
      return rejectWithValue("error")
    }
  })
