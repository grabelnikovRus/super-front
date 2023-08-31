import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";
import { 
    getArticleNumPage, 
    getArticlePageLimit, 
    getArticlePageHasMore 
} from "../selectors";
import { articlePageActions } from "../slice/articlePageSlice";

export const fetchNextArticlePage = createAsyncThunk<
  ArticleType[],
  undefined,
  OptionsCreateAsync
>(
  "articlePage/fetchArticlePage",
  async (_, { rejectWithValue, extra, dispatch, getState }) => {
    const limit = getArticlePageLimit(getState());
    const numPage = getArticleNumPage(getState());
    const hasMore = getArticlePageHasMore(getState());

    if (!hasMore) return;

    const newNumPage = numPage + 1;
    dispatch(articlePageActions.setPage(newNumPage));

    try {
      const res = await extra.api.get("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: newNumPage,
        },
      });

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
