import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type ArticleDetailsSchema } from "../types/articleDetails";
import { fetchArticleById } from "../services/fetchArticleById";
import { type ArticleType } from "../types/article";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<ArticleType>) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload;
    });
    addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: carticleDetailsActions, reducer: articleDetailsReducer } =
  articleDetailsSlice;
