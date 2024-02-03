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
import { getArticleNumPage } from "../selectors";

export const fetchArticlePage = createAsyncThunk<
  ArticleType[],
  void,
  OptionsCreateAsync
>(
  "articlePage/fetchArticlePage",
  async (_, { dispatch, rejectWithValue, extra, getState }) => {
    const numPage = getArticleNumPage(getState())
    const limit = getFilterLimit(getState());
    const order = getFilterOrder(getState())
    const sort = getFilterSort(getState())
    const search = getFilterSearch(getState())
    const type = getType(getState())

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
