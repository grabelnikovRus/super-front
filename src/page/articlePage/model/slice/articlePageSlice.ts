import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";
import { type ArticlePageSchema } from "../types";
import { type ArticleType } from "@entities/article";
import { fetchArticlePage } from "../services/fetchArticlePage";

const articleAdapter = createEntityAdapter<ArticleType>({
  selectId: (comment) => comment.id,
});

const initialState = articleAdapter.getInitialState<ArticlePageSchema>({
  isLoading: false,
  error: undefined,
  page: 0,
  hasMore: true,
  ids: [],
  entities: {},
  _isInit: false
});

export const getArticlePage = articleAdapter.getSelectors<StateType>(
  (state) => state.articlePage || articleAdapter.getInitialState()
);

export const articlePageSlice = createSlice({
  name: "articlePage",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    init: (state) => {
      state._isInit = true
    },
    removeList: (state) => {
      articleAdapter.removeAll(state)
      state.hasMore = true;
      state.page = 0
    } 
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchArticlePage.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchArticlePage.fulfilled, (
      state, 
      action: PayloadAction<ArticleType[]>
    ) => {
      state.isLoading = false;
      state.error = undefined;
      if (!action.payload || action.payload.length === 0) {
        state.hasMore = false;
        return
      }
      state.hasMore = true;
      articleAdapter.addMany(state, action.payload);
    });
    addCase(fetchArticlePage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlePageActions, reducer: articlePageReducer } =
  articlePageSlice;
