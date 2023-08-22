import { type CommentTypes } from "@entities/comment";
import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit"
import { type ArticleDetailsCommentsSchema } from "../types";
import { type StateType } from "@app/providers/storeProvider";
import { fetchComments } from "../services/fetchComments";

const commentAdapter = createEntityAdapter<CommentTypes>({
  selectId: (comment) => comment.id
})

const initialState: ArticleDetailsCommentsSchema = {
  ...commentAdapter.getInitialState(),
  isLoading: false,
  error: undefined
}

export const getArticleComments = commentAdapter.getSelectors<StateType>(
  (state) => state.articleComments || commentAdapter.getInitialState()
)

export const articleComments = createSlice({
  name: "articleComments",
  initialState,
  reducers: {

  },
  extraReducers: ({ addCase }) => {
    addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
      state.error = undefined
    })
    addCase(fetchComments.fulfilled, (state, action: PayloadAction<CommentTypes[]>) => {
      commentAdapter.setAll(state, action.payload)
      state.isLoading = false;
      state.error = undefined
    })
    addCase(fetchComments.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload
    })
  }
})

export const {
  actions: articleCommentsActions,
  reducer: articleCommentsReducer
} = articleComments;
