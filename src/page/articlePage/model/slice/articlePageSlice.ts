import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";
import { type ArticlePageSchema } from "../types";
import { type ArticleViewType, type ArticleType } from "@entities/article";
import { fetchArticlePage } from "../services/fetchArticlePage";
import { fetchNextArticlePage } from "../services/fetchNextArticlePage";

const articleAdapter = createEntityAdapter<ArticleType>({
  selectId: (comment) => comment.id,
});

const initialState = articleAdapter.getInitialState<ArticlePageSchema>({
  isLoading: false,
  error: undefined,
  view: "small",
  limit: 0,
  page: 1,
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
    setView: (state, action: PayloadAction<ArticleViewType>) => {
      state.view = action.payload;
      state.limit = action.payload === "big" ? 4 : 9;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    init: (state) => {
      state._isInit = true
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchArticlePage.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchArticlePage.fulfilled, (state, action: PayloadAction<ArticleType[]>) => {
      state.isLoading = false;
      state.error = undefined;
      console.log(action)
      state.hasMore = true;
      articleAdapter.setAll(state, action.payload);
    });
    addCase(fetchArticlePage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    addCase(fetchNextArticlePage.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchNextArticlePage.fulfilled, (state, action: PayloadAction<ArticleType[]>) => {
      state.isLoading = false;
      state.error = undefined;
      if (!action.payload || action.payload.length === 0) {
        state.hasMore = false;
        return
      }
      state.hasMore = true;
      articleAdapter.addMany(state, action.payload);
    });
    addCase(fetchNextArticlePage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlePageActions, reducer: articlePageReducer } =
  articlePageSlice;
