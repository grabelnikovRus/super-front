import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useRef, type FC } from "react";
import { useSelector } from "react-redux";
import { 
  FixedSizeList, 
  type ListOnScrollProps, 
  type ListChildComponentProps 
} from "react-window";
import InfiniteLoader from "react-window-infinite-loader"
import { 
  getItemReactWindowPage, 
  reactWindowPageActions, 
  reactWindowPageReducer 
} from "../model/slice/reactWindowSlice";
import { 
  getReactWindowPageHasMore, 
  getReactWindowPageIsLoading,
  getReactWindowPageScroll
} from "../model/selectors";
import { fetchReactWindowPage } from "../model/services/fetchReactWindowPage";
import { useReducerManager } from "@shared/hooks/useReducerManager";
import { type ReducerList } from "@app/providers/storeProvider";
import { useInitEffect } from "@shared/hooks/useInitEffect";
import { ArticleListItem } from "@entities/article/ui/articleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "@entities/article";

import s from "./ReactWindowPage.module.scss"
import { useDebounce } from "@shared/hooks/useDebounce";

const reducer: ReducerList = { reactWindowPage: reactWindowPageReducer }
export const ReactWindowPage: FC = () => {
  const dispatch = useAppDispatch();
  const refPage = useRef<HTMLDivElement | null>(null); // TODO реализовать переключение на плитку

  useReducerManager(reducer, false)

  const articles = useSelector(getItemReactWindowPage.selectAll);
  const isLoading = useSelector(getReactWindowPageIsLoading);
  const hasNextPage = useSelector(getReactWindowPageHasMore)
  const scroll = useSelector(getReactWindowPageScroll)

  const loadMoreItems = isLoading 
    ? () => {} 
    : async () => await dispatch(fetchReactWindowPage());
  const itemCount = hasNextPage ? articles.length + 1 : articles.length;
  const isItemLoaded = (index: number) => !hasNextPage || index < articles.length;

  const debounceSaveScroll = useDebounce(
    (coordY: number) => dispatch(reactWindowPageActions.saveScroll(coordY))
    , 100
  );
  const onScroll = ({ scrollOffset }: ListOnScrollProps) => { 
    debounceSaveScroll(scrollOffset); 
  }

  const Item = ({ index, style }: ListChildComponentProps) => {
    if (!isItemLoaded(index)) {
      return (<div style={style} className={s.page__skeletons}>
        <ArticleListItemSkeleton articleView="big" />
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
    <div className={s.page} ref={refPage}>
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
            onScroll={onScroll}
            initialScrollOffset={scroll}
            itemSize={545}
            height={1}
            style={{ height: "calc(100vh - var(--height-navbar))"}}
            width="auto"
          >
            {Item}
          </FixedSizeList>
        )}
      </InfiniteLoader>
    </div>
  );
};
