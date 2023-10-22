import { useState } from "react";
import { classNames } from "@shared/helpers/lib"
import s from "./Tabs.module.scss";

export interface TansItem<T> {
   value: T
   content: string
}

interface TabsProps<T> {
   tabs: Array<TansItem<T>>
   defaultValue: T
   toggleTab: (items: T) => void
   className?: string
}

export const Tabs = <T extends string>({ 
   tabs, 
   defaultValue, 
   toggleTab, 
   className,
}: TabsProps<T>) => {

   const [ activeTab, setActiveTab] = useState<T>(defaultValue)

   const onClickTab = (value: T) => () => {
      if (activeTab === value) return

      setActiveTab(value);
      toggleTab(value)
   }

   return (
      <div className={classNames(s.tabs, className)}>
         {tabs.map(({ value, content }) => (
            <span 
               className={classNames(s.tabs_item, {
                  [s.tabs_item__active]: activeTab === value
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
