import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";
import { getArticleNumPage } from "../selectors";
import { articlePageActions } from "../slice/articlePageSlice";
import { getFilterLimit, getFilterOrder, getFilterSort } from "@feature/filters";

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

    const newNumPage = numPage + 1;

    try {
      const res = await extra.api.get("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: numPage,
          _order: order,
          _sort: sort,
        },
      });

      dispatch(articlePageActions.setPage(newNumPage));

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);
