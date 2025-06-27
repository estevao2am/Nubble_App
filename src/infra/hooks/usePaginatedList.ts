import { useState, useEffect } from "react";
import { Page } from "../../types/Pages";
import { useInfiniteQuery } from "@tanstack/react-query";
import { optional } from "zod";



export interface usePaginatedListResult<TData> {
  list: TData[],
  isError: boolean | null,
  isLoading: boolean,
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage:boolean
}
 
export function UsePaginatedList <Data>(
  queryKey:readonly unknown[],
  getList:(page:number)=> Promise<Page<Data>>,):usePaginatedListResult<Data> {

     const [list, setList] = useState<Data[]>([]);
    

  const query = useInfiniteQuery<Page<Data>, Error>({
  queryKey,
queryFn: ({ pageParam = 1 }) => getList(pageParam as number),  initialPageParam: 1,
  getNextPageParam: (lastPage) =>
    lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : null,
});

 useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);
     
        return {
            list,
          isLoading : query.isLoading,
            isError:query.isError,
            refresh:query.refetch,
            fetchNextPage:query.fetchNextPage,
            hasNextPage :!!query.hasNextPage // verificar se há outra pagina
        }

}


  // const query = useInfiniteQuery({
  //   queryKey,
  //   queryFn: ({pageParam = 1}) => getList(pageParam),
  //   getNextPageParam: ({meta}) =>
  //     meta.hasNextPage ? meta.currentPage + 1 : null,
  // });