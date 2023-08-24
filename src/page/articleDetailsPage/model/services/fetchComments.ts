import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type CommentTypes } from "@entities/comment";

export const fetchComments = createAsyncThunk<CommentTypes[], string, OptionsCreateAsync>(
  "articles/fetchComments",
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const res = await extra.api.get("/comments", {
        params: {
          articleId,
          _expand: "user",
        },
      });

      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
