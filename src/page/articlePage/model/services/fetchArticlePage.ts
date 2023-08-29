import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";

export const fetchArticlePage = createAsyncThunk<ArticleType[], undefined, OptionsCreateAsync>(
  "articlePage/fetchArticlePage",
  async (_, { rejectWithValue, extra }) => {
    try {
      const res = await extra.api.get("/articles", {
        params: {
          _expand: "user",
        },
      });

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
