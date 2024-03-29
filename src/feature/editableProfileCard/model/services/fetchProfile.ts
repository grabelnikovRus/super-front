import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ProfileType } from "../types/types";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";

export const fetchProfile = createAsyncThunk<ProfileType, string, OptionsCreateAsync>(
  "profile/fetchProfile",
  async (profileId, { rejectWithValue, extra }) => {
    try {
      const res = await extra.api.get(`/profile/${profileId}`);

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);
      return rejectWithValue("error");
    }
  }
);
