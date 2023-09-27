import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { fetchArticlePage } from "./fetchArticlePage";
import { getArticlePageIsInit } from "../selectors";
import { filterActions } from "@feature/filters";
import { type OmitFilterScheme } from "@feature/filters/model/types";



export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  OptionsCreateAsync
>(
  "articlePage/initArticlePage",
  async (searchParams, { dispatch, getState }) => {
    const obj: OmitFilterScheme = {
      sort: "createdAt",
      order: "asc",
      search: "",
      type: "IT"
    }

    for (const [key, value] of searchParams) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (key && value) obj[key] = value
    }

    dispatch(filterActions.init(obj)) 
    const isInit = getArticlePageIsInit(getState())

    if (isInit) return;

    await dispatch(fetchArticlePage({}));
  }
);
