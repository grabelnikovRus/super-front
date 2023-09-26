import { useState, type FC } from "react";
import { classNames } from "@shared/helpers/lib"
import s from "./Tabs.module.scss";

interface TansItem {
   value: string
   content: string
}

interface TabsProps {
   tabs: TansItem[]
   defaultValue: string[]
   toggleTab: (items: string[]) => void
}

export const Tabs: FC<TabsProps> = ({ tabs, defaultValue, toggleTab }) => {
   const [ activeTabList, setActiveTab] = useState(defaultValue)

   const onClickTab = (value: string) => () => {
      const newActiveTabList = activeTabList.includes(value) 
         ? activeTabList.filter((item) => item !== value) 
         : [...activeTabList, value]

      setActiveTab(newActiveTabList);
      toggleTab(newActiveTabList)
   }

   return (
      <div className={s.tabs}>
         {tabs.map(({ value, content }) => (
            <span 
               className={classNames(s.tabs_item, {
                  [s.tabs_item__active]: activeTabList.includes(value)
               })} 
               key={value}
               onClick={onClickTab(value)}
            >
               {content}
            </span>
         ))}
      </div>
   );
}
