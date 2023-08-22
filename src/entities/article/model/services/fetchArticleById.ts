import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ArticleType } from "../types/article"
import { type OptionsCreateAsync } from "@app/providers/storeProvider"
import { AxiosError } from "axios"
import i18n from "@shared/config/i18n/config"

export const fetchArticleById =
  createAsyncThunk<ArticleType, string, OptionsCreateAsync>(
    "articles/fetchArticleById",
    async(articleId, { rejectWithValue, extra }) => {
      try {
        const res = await extra.api.get(`/articles/${articleId}`)

        if (!res.data) {
          throw new Error()
        }

        return res.data
      } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 404) {
          return rejectWithValue(i18n.t("article_not"))
        }

        if (e instanceof Error) return rejectWithValue(e.message)

        return rejectWithValue("error")
      }
    })
