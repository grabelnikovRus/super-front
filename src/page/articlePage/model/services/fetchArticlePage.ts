import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";
import { 
  getFilterLimit, 
  getFilterOrder, 
  getFilterSearch, 
  getFilterSort, 
  getType
} from "@feature/filters";
import { articlePageActions } from "../slice/articlePageSlice";

export interface FetchArticlePageProps {
  replace?: boolean
}

export const fetchArticlePage = createAsyncThunk<
  ArticleType[],
  FetchArticlePageProps,
  OptionsCreateAsync
>(
  "articlePage/fetchArticlePage",
  async ({ replace }, { dispatch, rejectWithValue, extra, getState }) => {
    const limit = getFilterLimit(getState());
    const order = getFilterOrder(getState())
    const sort = getFilterSort(getState())
    const search = getFilterSearch(getState())
    const type = getType(getState())
    const numPage = 1

    if (replace) {
      dispatch(articlePageActions.setPage(numPage))
    } else {
      dispatch(articlePageActions.setPage(numPage + 1))
    }

    try {
      const res = await extra.api.get("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: numPage,
          _order: order,
          _sort: sort,
          q: search,
          type_like: type
        },
      });

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
