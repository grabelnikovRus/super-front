import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { getArticlePageIsInit } from "../selectors";
import { fetchArticlePage } from "./fetchArticlePage";
import { articlePageActions } from "../slice/articlePageSlice";

export const initArticlePage = createAsyncThunk<
  void,
  void,
  OptionsCreateAsync
>(
  "articlePage/initArticlePage",
  async (_, { dispatch, getState }) => {
    const isInit = getArticlePageIsInit(getState())

    if (isInit) return;

    dispatch(articlePageActions.init());
    await dispatch(fetchArticlePage());
  }
);
