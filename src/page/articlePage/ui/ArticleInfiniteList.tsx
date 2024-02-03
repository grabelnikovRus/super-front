import { ArticleList } from "@entities/article"
import { LoadingOnScroll } from "@shared/ui"
import { useSelector } from "react-redux"
import { articlePageReducer, getArticlePage } from "../model/slice/articlePageSlice"
import { 
  getArticlePageError, 
  getArticlePageHasMore, 
  getArticlePageIsLoading 
} from "../model/selectors"
import { getFilterView } from "@feature/filters"
import { useReducerManager } from "@shared/hooks/useReducerManager"

interface ArticleInfiniteListProps {
  fetchInfo: () => void
}

const reducer = { 
  articlePage: articlePageReducer,
};

export const ArticleInfiniteList = ({ fetchInfo }: ArticleInfiniteListProps) => {
  useReducerManager(reducer, false);
    
  const articles = useSelector(getArticlePage.selectAll);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getFilterView);
  const hasMore = useSelector(getArticlePageHasMore);
    
  if (error) return <span>{error}</span>

  return (
    <>
      <ArticleList 
        articles={articles} 
        articleView={view}
        isLoading={isLoading} 
        target="_blank"
      />
      {!isLoading && hasMore && <LoadingOnScroll cb={fetchInfo} />}  
    </>
  )
}