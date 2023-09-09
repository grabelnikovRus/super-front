import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { fetchArticlePage } from "./fetchArticlePage";
import { getArticlePageIsInit } from "../selectors";

export const initArticlePage = createAsyncThunk<
  void,
  void,
  OptionsCreateAsync
>(
  "articlePage/initArticlePage",
  async (_, { dispatch, getState }) => {
    const isInit = getArticlePageIsInit(getState())

    if (isInit) return;

    await dispatch(fetchArticlePage({}));
  }
);
