import { ArticleList } from "@entities/article"
import { LoadingOnScroll } from "@shared/ui"
import { useSelector } from "react-redux"
import { getArticlePage } from "../model/slice/articlePageSlice"
import { 
  getArticlePageError, 
  getArticlePageHasMore, 
  getArticlePageIsLoading 
} from "../model/selectors"
import { getFilterView } from "@feature/filters"
import { useDebounce } from "@shared/hooks/useDebounce"
import { fetchNextArticlePage } from "../model/services/fetchNextArticlePage"
import { useAppDispatch } from "@shared/hooks/useAppDispatch"

export const ArticleInfiniteList = () => {
  const dispatch = useAppDispatch();
    
  const articles = useSelector(getArticlePage.selectAll);
  const error = useSelector(getArticlePageError);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getFilterView);
  const hasMore = useSelector(getArticlePageHasMore);

  const fetchNextArticlePageDebounce = useDebounce(
    async () =>  await dispatch(fetchNextArticlePage()), 400
  )
    
  console.log(error);

  return (
    <>
      <ArticleList 
        articles={articles} 
        articleView={view}
        isLoading={isLoading} 
        target="_blank"
      />
      {!isLoading && hasMore && <LoadingOnScroll cb={fetchNextArticlePageDebounce} />}  
    </>
  )
}