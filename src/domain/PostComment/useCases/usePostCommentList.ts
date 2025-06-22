import { usePaginatedList } from "../../../infra/hooks/usePaginatedList";
import { postCommentService } from "../PostCommentService";




export function usePostCommentList(postId:number){
    function getList(page:number){
        return postCommentService.getList(postId,page)
    }
    return usePaginatedList(getList)
}