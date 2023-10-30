import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type ArticleType } from "@entities/article";
import { reactWindowPageActions } from "../slice/reactWindowSlice";
import { getReactWindowPageNumber } from "../selectors";


export const fetchReactWindowPage = createAsyncThunk<
  ArticleType[],
  void,
  OptionsCreateAsync
>(
  "articlePage/fetchArticlePage",
  async (_, { rejectWithValue, extra, dispatch, getState }) => {
    const page = getReactWindowPageNumber(getState());
console.log(page)
    try {
      const res = await extra.api.get("/articles", {
        params: {
          _expand: "user",
          _limit: 4,
          _page: page,
        },
      });

      dispatch(reactWindowPageActions.setPage(page + 1))

      return res.data;
    } catch (e) {
      if (e instanceof Error) return rejectWithValue(e.message);

      return rejectWithValue("error");
    }
  }
);