import { type FC } from "react"
import { ViewSwitcher, type ViewType } from "@entities/viewSwitcher";
import ListIcon from "@shared/assest/icon/list.svg";
import TileIcon from "@shared/assest/icon/tile.svg";
import { filterActions, filterReducer } from "../model/slice/filterSlice";
import { useSelector } from "react-redux";
import { getFilterView } from "../model/selectors";

import s from "./Filter.module.scss"
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useInitEffect } from "@shared/hooks/useInitEffect";

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

const reducer = { filter: filterReducer }

export const Filter: FC = () => {
    const dispatch = useAppDispatch()
    const view = useSelector(getFilterView)

    useReducerManager(reducer, false)

    useInitEffect(() => { dispatch(filterActions.init()) }, [])

    return (
        <div className={s.filter}>
            <ViewSwitcher
                arrayRender={views}
                className={s.page_switcher}
                currentActive={view}
             />
        </div>
    )
}