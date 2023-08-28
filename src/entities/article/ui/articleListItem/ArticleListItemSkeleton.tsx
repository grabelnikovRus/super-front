import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/helpers/lib"
import { 
   type ArticleViewType,
} from "../../model/types/article";

import s from "./ArticleListItem.module.scss";

import { Skeleton, Button } from "@shared/ui";

interface ArticleListItemProps {
   articleView: ArticleViewType
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = ({
   articleView
}) => {
   const { t } = useTranslation("articles")

   return (
      <div className={classNames(s.item, s.skeleton, s[articleView])}>
         <Skeleton className={s.item_picture} />
         <Skeleton className={s.item_text}/>
         <footer className={s.item_info}>
            <Skeleton className={s.item_avatar} />
            <Skeleton className={s.item_username} />
            <Skeleton className={s.item_type} />
            <Skeleton className={s.item_views} />
            <Skeleton className={s.item_title}/>
         </footer>
         <div className={s.item_buttons}>
            <Button>
               {t("read_more")}
            </Button>
         </div>
      </div>
   );
}
