import { useCallback, type FC, useMemo } from "react"
import { ViewSwitcher, type ViewType } from "@entities/viewSwitcher";
import ListIcon from "@shared/assest/icon/list.svg";
import TileIcon from "@shared/assest/icon/tile.svg";
import { filterActions } from "../model/slice/filterSlice";
import { useSelector } from "react-redux";
import { getFilterView } from "../model/selectors";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { Input, type OptionsSelect, Select } from "@shared/ui";
import { type OrderSortType, type SortType } from "../model/types";
import { useTranslation } from "react-i18next";

import s from "./Filter.module.scss"

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

export const Filter: FC = () => {
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

    return (
        <div className={s.filter}>
            <Select<SortType>
                className={s.filter_sort}
                options={optionsSelectSort} 
                defaultValue="title"
                onChange={onChangeSelect(filterActions.setSort)}
            />
            <Select<OrderSortType>
                className={s.filter_order}
                options={optionsSelectOrder}
                defaultValue="asc"
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
            />
        </div>
    )
}