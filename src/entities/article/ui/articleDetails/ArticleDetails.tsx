import { type FC } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@shared/helpers/lib"
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { Article, Avatar, Button, Skeleton } from "@shared/ui";
import { type ArticleBlocksTypes, type ArticleType } from "../../model/types/article";
import Eye from "@shared/assest/icon/eye.svg"
import Calendar from "@shared/assest/icon/clarity_date.svg"
import {
  getArticlesData,
  getArticlesError,
  getArticlesIsLoadind
} from "../../model/selectors/articleDetails";

import s from "./ArticleDetails.module.scss";
import { ArticleImageBlock } from "../articleImageBlock/ArticleImageBlock";
import { ArticleCodeBlock } from "../articleCodeBlock/ArticleCodeBlock";
import { ArticleTextBlock } from "../articleTextBlock/ArticleTextBlock";
import { useInitEffect } from "@shared/hooks/useInitEffect";

const reducer = { articles: articleDetailsReducer }

interface ArticleDetailsProps {
  id: string | undefined
}

const renderBlocks = ({ type, id, ...rest }: ArticleBlocksTypes) => {
  switch (type) {
    case "TEXT":
      return "paragraphs" in rest ? <ArticleTextBlock {...rest} key={id}/> : null
    case "CODE":
      return "code" in rest ? <ArticleCodeBlock {...rest} key={id}/> : null
    case "IMAGE":
      return "src" in rest && "title" in rest
        ? <ArticleImageBlock {...rest} key={id}/>
        : null
    default:
      return null
  }
}

const renderArticle = (
  isLoading: boolean = false,
  error: string = "",
  data: ArticleType | undefined
) => {
  let content

  if (isLoading) {
    content = (
      <div className={s.article}>
        <Skeleton className={s.article_avatar}/>
        <Skeleton className={s.skelet_line_title}/>
        <Skeleton className={s.skelet_line_subtitle}/>
        <Skeleton className={s.skeleton_block}/>
        <Skeleton className={s.skeleton_block}/>
        <Button className={s.b}>dsd</Button>
      </div>
    )
  }

  if (error) {
    content = <Article theme="error" title={error} align="center"/>
  }

  if (data) {
    const { img, title, subtitle, views, createdAt } = data
    content = (
      <div className={s.article}>
        <div className={s.article_avatar}>
          <Avatar src={img} />
        </div>
        <Article title={title} text={subtitle} className={{
          title: s.article_title,
          text: s.article_subtitle
        }}/>
        <div className={s.article_item}>
          <Eye className={s.article_icon}/>
          <Article text={views} />
        </div>
        <div className={s.article_item}>
          <Calendar className={s.article_icon}/>
          <Article text={createdAt} />
        </div>
        {data.blocks.map(renderBlocks)}
      </div>
    )
  }

  return content
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticlesIsLoadind)
  const error = useSelector(getArticlesError)
  const data = useSelector(getArticlesData)

  useReducerManager(reducer)

  useInitEffect(() => {
    if (id) dispatch(fetchArticleById(id))
  }, [id])

  return (
      <div className={classNames(s.articleDetails)}>
        {renderArticle(isLoading, error, data)}
      </div>
  );
}
