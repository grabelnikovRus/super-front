export type ArticleViewType = "big" | "small"

type OrderSortType = "desc" | "asc"

type SortType = "createdAt" | "title" | "views"

export interface FilterScheme {
    view: ArticleViewType
    order: OrderSortType
    search: string
    sort: SortType
    limit: number;
}
