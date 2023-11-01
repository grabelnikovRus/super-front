import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { type FC } from "react";
import { useSelector } from "react-redux";
import { FixedSizeList, type ListChildComponentProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader"
import { 
    getItemReactWindowPage, 
    reactWindowPageReducer 
} from "../model/slice/reactWindowSlice";
import { 
  getReactWindowPageHasMore, 
  getReactWindowPageIsLoading 
} from "../model/selectors";
import { fetchReactWindowPage } from "../model/services/fetchReactWindowPage";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { type ReducerList } from "@app/providers/storeProvider";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { ArticleListItem } from "@entities/article/ui/articleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "@entities/article";

import "./ReactWindowPage.scss"

const reducer: ReducerList = { reactWindowPage: reactWindowPageReducer }
export const ReactWindowPage: FC = () => {
  const dispatch = useAppDispatch()

  useReducerManager(reducer)

  const articles = useSelector(getItemReactWindowPage.selectAll);
  const isLoading = useSelector(getReactWindowPageIsLoading);
  const hasNextPage = useSelector(getReactWindowPageHasMore)

  const loadMoreItems = isLoading 
    ? () => {} 
    : async () => await dispatch(fetchReactWindowPage());
  const itemCount = hasNextPage ? articles.length + 1 : articles.length;
  const isItemLoaded = (index: number) => !hasNextPage || index < articles.length;

  const Item = ({ index, style }: ListChildComponentProps) => {
    if (!isItemLoaded(index)) {
      return (<div style={style}>
        <ArticleListItemSkeleton articleView="big" />
      </div>);
    } 

    return (
      <div style={style}>
        <ArticleListItem 
          key={articles[index].id} 
          article={articles[index]} 
          articleView="big"
        />
      </div>
    );
  };

  useInitEffect(() => {
    dispatch(fetchReactWindowPage())
  }, [])

  return (
    <InfiniteLoader
      loadMoreItems={loadMoreItems}
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      minimumBatchSize={4}
      threshold={1}
    >
      {({ onItemsRendered, ref, }) => (
        <FixedSizeList
          itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          ref={ref}
          itemSize={545}
          height={1}
          style={{ height: "calc(100vh - var(--height-navbar))"}}
          width="auto"
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};
