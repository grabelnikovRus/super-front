import { type OptionsCreateAsync } from "@app/providers/storeProvider";
import { type CommentTypes } from "@entities/comment";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthData } from "@entities/user"

interface sendData {
  text?: string
  articleId?: string
}

export const sendComment = createAsyncThunk<CommentTypes, sendData, OptionsCreateAsync>(
  "articles/sendComment",
  async({ text, articleId }, { rejectWithValue, getState, extra }) => {
    try {
      const userData = getAuthData(getState())

      if (!text) return

      if (!articleId || !userData) return rejectWithValue("error");

      const res = await extra.api.post("/comments", {
        articleId,
        userId: userData.id,
        text
      })

      if (!res.data) {
        throw new Error()
      }

      return res.data
    } catch (e) {
      return rejectWithValue("error")
    }
  }
)
