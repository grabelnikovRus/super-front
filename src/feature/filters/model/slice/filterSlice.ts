import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ArticleThemeType } from "@entities/article";
import { 
  type SortType, 
  type ArticleViewType, 
  type FilterScheme, 
  type OrderSortType,
  type OmitFilterScheme
} from "../types";

const initialState: FilterScheme ={ 
    view: "small",
    search: "",
    sort: "createdAt",
    limit: 0,
    order: "asc",
    type: "IT"
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewType>) => {
      state.view = action.payload;
      state.limit = action.payload === "big" ? 4 : 9;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload
    },
    setOrder: (state, action: PayloadAction<OrderSortType>) => {
      state.order = action.payload
    },
    setSeatch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setType: (state, action: PayloadAction<ArticleThemeType>) => {
      state.type = action.payload
    },
    init: (state, action: PayloadAction<OmitFilterScheme>) => {
      const params = action.payload
      state.sort = params.sort
      state.order = params.order
      state.search = params.search
    },
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
