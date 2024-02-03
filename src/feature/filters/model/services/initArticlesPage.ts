import { createAsyncThunk } from "@reduxjs/toolkit";
import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { filterActions } from "../slice/filterSlice";
import { type OmitFilterScheme } from "../types";

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  OptionsCreateAsync
>(
  "articlePage/initArticlePage",
  async (searchParams, { dispatch }) => {
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
  }
);
