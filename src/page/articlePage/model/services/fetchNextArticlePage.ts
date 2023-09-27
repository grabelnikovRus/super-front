import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";
import { getArticleNumPage } from "../selectors";
import { articlePageActions } from "../slice/articlePageSlice";
import { 
  getFilterLimit, 
  getFilterOrder, 
  getFilterSearch, 
  getFilterSort, 
  getType
} from "@feature/filters";

export const fetchNextArticlePage = createAsyncThunk<
  ArticleType[],
  void,
  OptionsCreateAsync
>(
  "articlePage/fetchNextArticlePage",
  async (_, { extra, dispatch, getState, rejectWithValue }) => {
    const numPage = getArticleNumPage(getState());
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

      dispatch(articlePageActions.setPage(numPage + 1));

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
