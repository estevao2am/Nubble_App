import { useState, useEffect } from "react";
import { Page } from "../../types/Pages";




export function usePaginatedList <Data>(getList:(page:number)=> Promise<Page<Data>>) {

     const [list, setList] = useState<Data[]>([]);
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState<boolean | null>(null)
      const [page, setPage] = useState(1)
      const [hasNextPage, setHasNextPage] = useState(true)


      async function fetchInitialData(){
        try{
          const {data,meta} = await getList(1)
          setList(data)
          if(meta.hasNextPage) {
            setPage(2)
          setHasNextPage(true)


          } else{
            setHasNextPage(false)
          }

        }catch(err){ 
          //console.log("ERROR", error)
          setError(true)
        }finally{
          setLoading(false)
        }
      }
// Pagination 

async function fetchNextPage(){ 
  if(loading || !hasNextPage){
    return 
  } try{
    setLoading(true)
    const {data,meta} = await getList(page)
    if(meta.hasNextPage){
    setList(prev => [...prev, ...data])

    } else{
      setHasNextPage(false)
    }
    setPage(prev => prev + 1)
  } catch(er){
    setError(true)
  }finally{
    setLoading(false)
  }
}

       useEffect(() => {
          //postService.getList().then(list => setPostList(list));
          fetchInitialData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
      
        return {
            list,
            loading,
            error,
            refresh:fetchInitialData,
            fetchNextPage
        }

}