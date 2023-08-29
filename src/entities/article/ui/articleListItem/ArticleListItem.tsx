import { type HTMLAttributes, type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/helpers/lib"
import { 
   type ArticleTextBlockType,
   type ArticleType, 
   type ArticleViewType,
   type ArticleBlocksTypes
} from "../../model/types/article";
import Eye from "@shared/assest/icon/eye.svg"

import s from "./ArticleListItem.module.scss";
import { useHover } from "@shared/hooks/useHover";
import { Avatar, AppLink } from "@shared/ui";
import { RouterPath } from "@app/router/config/config";
import { type To } from "react-router-dom";

interface ArticleListItemProps {
   article: ArticleType
   articleView: ArticleViewType
}

interface WrapperListItemProps extends HTMLAttributes<HTMLDivElement> {
   articleView: ArticleViewType
   to: To;
}

const WrapperListItem: FC<WrapperListItemProps> = ({ children, articleView, to }) => (
  articleView === "big" 
   ? <div className={classNames(s.item, s[articleView])}>{children}</div>
   : <AppLink to={to} className={classNames(s.item, s[articleView])}>{children}</AppLink>
)

export const ArticleListItem: FC<ArticleListItemProps> = ({
   article,
   articleView
}) => {
   const { t } = useTranslation("articles")
   const [ isHover, bindHover] = useHover()
   console.log(isHover)
   const { 
      id, title, img, views, createdAt, type, blocks, user: { username, avatar } 
   } = article

   const path = useMemo(() => `${RouterPath.ARTICLES}/${id}`, [id])

   const { paragraphs } = blocks.find(
      (block: ArticleBlocksTypes) => block.type === "TEXT"
   ) as ArticleTextBlockType;

   return (
      <WrapperListItem 
         to={path} 
         articleView={articleView} 
         {...bindHover}
      >
         <header className={s.item_picture}>
            <img className={s.item_img} src={img} alt={title} />
            <span className={s.item_date}>{createdAt}</span>
         </header>
         <p className={s.item_text}>{paragraphs.join("\n")}</p>
         <footer className={s.item_info}>
            <Avatar className={s.item_avatar} src={avatar} alt="avatar" theme="s"/>
            <span className={s.item_username}>{username}</span>
            <span className={s.item_type}>{type.join(" ")}</span>
            <span className={s.item_views}>
               <Eye />
               {views}
            </span>
            <h6 className={s.item_title}>{title}</h6>
         </footer>
         {articleView === "big" && (
            <div className={s.item_buttons}>
               <AppLink to={path} theme="border">
                  {t("read_more")}
               </AppLink>
            </div>)
         }
      </WrapperListItem>
   );
}
