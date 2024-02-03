import { useCallback, useEffect, useMemo, useRef } from "react"
import { ViewSwitcher, type ViewType } from "@entities/viewSwitcher";
import ListIcon from "@shared/assest/icon/list.svg";
import TileIcon from "@shared/assest/icon/tile.svg";
import { filterActions, filterReducer } from "../model/slice/filterSlice";
import { useSelector } from "react-redux";
import { 
  getFilterOrder, 
  getFilterSearch, 
  getFilterSort, 
  getFilterView, 
  getType 
} from "../model/selectors";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { Input, type OptionsSelect, Select, Tabs, type TansItem } from "@shared/ui";
import { type OrderSortType, type SortType } from "../model/types";
import { useTranslation } from "react-i18next";
import { type ArticleThemeType } from "@entities/article";
import { addQueryParams } from "@shared/helpers/lib/addQueryParams/addQueryParams";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { useSearchParams } from "react-router-dom";
import { initArticlePage } from "../model/services/initArticlesPage";
import { useReducerManager } from "@shared/hooks/useReducerManager";

import s from "./Filter.module.scss"

interface FilterProps {
    fetchInfo: (isRemove: boolean) => void
}

const views: ViewType[] = [
    {
      Icon: TileIcon,
      actionType: () => filterActions.setView("small"),
      name: "small",
    },
    {
      Icon: ListIcon,
      actionType: () => filterActions.setView("big"),
      name: "big",
    },
  ];

const tabs: Array<TansItem<ArticleThemeType>> = [
    { value: "IT", content: "IT"},
    { value: "SCIENCE", content: "SCIENCE" },
    { value: "ECONOMY", content: "ECONOMY"},
]

const reducer = { 
  filter: filterReducer
};

export const Filter = ({ fetchInfo }: FilterProps) => {
    const dispatch = useAppDispatch()
    const view = useSelector(getFilterView)
    const { t, i18n } = useTranslation("articles")
    const [ searchParams ] = useSearchParams()
    const isMounted = useRef(false)

    useReducerManager(reducer, false);

    const order = useSelector(getFilterOrder)
    const sort = useSelector(getFilterSort)
    const search = useSelector(getFilterSearch)
    const type = useSelector(getType);

    const optionsSelectSort: Array<OptionsSelect<SortType>> = useMemo(() => ([
        { value: "createdAt", content: t("by_date")},
        { value: "title" , content: t("by_title")},
        { value: "views", content: t("by_views")}
    ]), [i18n.language])
    
    const optionsSelectOrder: Array<OptionsSelect<OrderSortType>> = useMemo(() => ([
        { value: "asc", content: t("ascending")},
        { value: "desc" , content: t("descending")},
    ]), [i18n.language])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const onChangeSelect = useCallback((action) => (value: SortType | OrderSortType) => {
        dispatch(action(value))
    }, [])

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const onChangeInput = useCallback((action) => (value: string) => {
        dispatch(action(value))
    }, [])

    const onChangeType = useCallback((value: ArticleThemeType) => {
        dispatch(filterActions.setType(value))
    }, [])

    useEffect(() => {
        addQueryParams({ order, sort, search, type });
    }, [order, sort, search, type])

    useEffect(() => {
        console.log({order, sort, search}, isMounted.current)
       if (isMounted.current) fetchInfo(true)
    }, [order, sort, search])

    useInitEffect(async () => {
        dispatch(initArticlePage(searchParams))
        isMounted.current = true
    }, []);

    return (
        <div className={s.filter}>
            <Select<SortType>
                className={s.filter_sort}
                options={optionsSelectSort} 
                defaultValue={sort}
                onChange={onChangeSelect(filterActions.setSort)}
            />
            <Select<OrderSortType>
                className={s.filter_order}
                options={optionsSelectOrder}
                defaultValue={order}
                onChange={onChangeSelect(filterActions.setOrder)}
            />
            <ViewSwitcher
                arrayRender={views}
                className={s.filter_view}
                currentActive={view}
            />
            <Input 
                className={s.filter_search}
                label={t("search") || ""}
                placeholder={t("search") || ""}
                onChange={onChangeInput(filterActions.setSeatch)}
                defaultValue={search}
            />
            <Tabs<ArticleThemeType>
                className={s.filter_tabs}
                tabs={tabs} 
                defaultValue={type} 
                toggleTab={onChangeType}
            />
        </div>
    )
}