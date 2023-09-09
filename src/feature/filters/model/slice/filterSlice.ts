import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ArticleViewType, type FilterScheme } from "../types";

const initialState: FilterScheme ={ 
    view: "small",
    search: "",
    sort: "createdAt",
    limit: 0,
    order: "asc",
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewType>) => {
      state.view = action.payload;
      state.limit = action.payload === "big" ? 4 : 9;
    },
    init: () => {},
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
