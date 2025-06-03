import { usePaginatedList } from "../../../domain/hooks/usePaginatedList";
import { Post } from '../postTypes';
import { postService } from "../postService";




export function usePostList (){
   return usePaginatedList<Post>(postService.getList)

}