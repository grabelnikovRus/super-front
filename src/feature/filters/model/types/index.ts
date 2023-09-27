import { type ArticleThemeType } from "@entities/article"

export type ArticleViewType = "big" | "small"

export type OrderSortType = "desc" | "asc"

export type SortType = "createdAt" | "title" | "views"

export interface FilterScheme {
    view: ArticleViewType
    order: OrderSortType
    search: string
    sort: SortType
    limit: number;
    type: ArticleThemeType
}

export type OmitFilterScheme = Omit<FilterScheme, "limit" | "view">
