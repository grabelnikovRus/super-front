import { type ArticleThemeType, type ArticleViewType } from "@entities/article"

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
