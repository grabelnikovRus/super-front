import { type ArticleType } from "@entities/article";
import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type ReactWindowPageSchema } from "../types";
import { type StateType } from "@app/providers/storeProvider";
import { fetchReactWindowPage } from "../services/fetchReactWindowPage";

const articleReactWindowAdapter = createEntityAdapter<ArticleType>({
  selectId: (comment) => comment.id,
});

const initialState = articleReactWindowAdapter.getInitialState<ReactWindowPageSchema>({
    isLoading: true,
    error: undefined,
    page: 1,
    hasMore: true,
    ids: [],
    entities: {},
    scroll: 0
});

export const getItemReactWindowPage = 
    articleReactWindowAdapter.getSelectors<StateType>(
        (state) => state.reactWindowPage || articleReactWindowAdapter.getInitialState())

export const reactWindowPageSlice = createSlice({
    name: "reactWindowPage",
    initialState,
    reducers: {
      setPage: (state, action: PayloadAction<number>) => {
        state.page = action.payload;
      },
      saveScroll: (state, action: PayloadAction<number>) => {
        state.scroll = action.payload;
      }
    },
    extraReducers: ({ addCase }) => {
      addCase(fetchReactWindowPage.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      });
      addCase(fetchReactWindowPage.fulfilled, (state, action: PayloadAction<ArticleType[]>) => {
        state.isLoading = false;
        state.error = undefined;
        if (!action.payload || action.payload.length === 0) {
          state.hasMore = false;
          return
        }
        state.hasMore = true;
        articleReactWindowAdapter.addMany(state, action.payload);
      });
      addCase(fetchReactWindowPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    },
  });
  
export const { actions: reactWindowPageActions, reducer: reactWindowPageReducer } =
  reactWindowPageSlice;