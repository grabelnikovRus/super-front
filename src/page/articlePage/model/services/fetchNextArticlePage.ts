import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { getArticleNumPage } from "../selectors";
import { articlePageActions } from "../slice/articlePageSlice";
import { fetchArticlePage } from "./fetchArticlePage";

export const fetchNextArticlePage = createAsyncThunk<
  void,
  boolean,
  OptionsCreateAsync
>(
  "articlePage/fetchNextArticlePage",
  async (isRemoveList = false, { dispatch, getState }) => {
    if (isRemoveList) dispatch(articlePageActions.removeList())

    const numPage = getArticleNumPage(getState());

    dispatch(articlePageActions.setPage(numPage + 1));
    dispatch(fetchArticlePage())
  }
);
