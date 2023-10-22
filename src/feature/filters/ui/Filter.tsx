import { useCallback, type FC, useMemo } from "react"
import { ViewSwitcher, type ViewType } from "@entities/viewSwitcher";
import ListIcon from "@shared/assest/icon/list.svg";
import TileIcon from "@shared/assest/icon/tile.svg";
import { filterActions } from "../model/slice/filterSlice";
import { useSelector } from "react-redux";
import { getFilterView } from "../model/selectors";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { Input, type OptionsSelect, Select, Tabs, type TansItem } from "@shared/ui";
import { type OmitFilterScheme, type OrderSortType, type SortType } from "../model/types";
import { useTranslation } from "react-i18next";
import { type ArticleThemeType } from "@entities/article";

import s from "./Filter.module.scss"

interface FilterProps extends OmitFilterScheme {}

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

export const Filter: FC<FilterProps> = ({ search, order, sort, type }) => {
    const dispatch = useAppDispatch()
    const view = useSelector(getFilterView)
    const { t, i18n } = useTranslation("articles")

    const optionsSelectSort: Array<OptionsSelect<SortType>> = useMemo(() => ([
        { value: "createdAt", content: t("by_date")},
        { value: "title" , content: t("by_title")},
        { value: "views", content: t("by_views")}
    ]), [i18n.language])
    
    const optionsSelectOrder: Array<OptionsSelect<OrderSortType>> = useMemo(() => ([
        { value: "asc", content: t("ascending")},
        { value: "desc" , content: t("descending")},
    ]), [i18n.language])

    const onChangeSelect = useCallback((action) => (value: SortType | OrderSortType) => {
        dispatch(action(value))
    }, [])

    const onChangeInput = useCallback((action) => (value: string) => {
        dispatch(action(value))
    }, [])

    const onChangeType = useCallback((value: ArticleThemeType) => {
        dispatch(filterActions.setType(value))
    }, [])

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