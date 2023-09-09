import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";
import { getArticleNumPage } from "../selectors";
import { getFilterLimit } from "@feature/filters";

interface FetchArticlePageProps {
  replace?: boolean
}

export const fetchArticlePage = createAsyncThunk<
  ArticleType[],
  FetchArticlePageProps,
  OptionsCreateAsync
>(
  "articlePage/fetchArticlePage",
  async ({ replace } = {}, { rejectWithValue, extra, getState }) => {
    const limit = getFilterLimit(getState());
    const numPage = getArticleNumPage(getState());

    try {
      const res = await extra.api.get("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: numPage,
        },
      });

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
