import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";
import { 
  type ArticleRecommendationsListSchema 
} from "../types/ArticleRecommendationsList";
import { type ArticleType } from "@entities/article";
import { 
  fetchArticleRecommendationsList 
} from "../services/fetchArticleRecommendationsList";

const articleRecommendationsListAdapter = createEntityAdapter<ArticleType>({
  selectId: (comment) => comment.id,
});

const initialState = articleRecommendationsListAdapter
    .getInitialState<ArticleRecommendationsListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    });

export const getArticlePage = articleRecommendationsListAdapter.getSelectors<StateType>(
  (state) => state.articleDetailsPage?.articleRecommendationsList 
    || articleRecommendationsListAdapter.getInitialState()
);

export const articleRecommendationsListSlice = createSlice({
  name: "articleRecommendationsList",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchArticleRecommendationsList.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchArticleRecommendationsList.fulfilled, (
      state, 
      action: PayloadAction<ArticleType[]>
    ) => {
      state.isLoading = false;
      state.error = undefined;
      articleRecommendationsListAdapter.setAll(state, action.payload);
    });
    addCase(fetchArticleRecommendationsList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { 
  actions: articleRecommendationsListActions, 
  reducer: articleRecommendationsListReducer 
} = articleRecommendationsListSlice;
