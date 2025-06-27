import { UsePaginatedList } from "../../../infra/hooks/usePaginatedList";
import { Post } from '../postTypes';
import { postService } from "../postService";
import { QueryKeys } from "../.../../../../infra/infraTypes";




export function usePostList (){
   return UsePaginatedList<Post>([QueryKeys.PostList],postService.getList)

}