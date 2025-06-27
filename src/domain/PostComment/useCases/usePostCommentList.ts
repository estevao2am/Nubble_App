import { UsePaginatedList } from "../../../infra/hooks/usePaginatedList";
import { postCommentService } from "../PostCommentService";
import { QueryKeys } from "../../../infra/infraTypes";




export function usePostCommentList(postId:number){
    function getList(page:number){
        return postCommentService.getList(postId,page)
    }
    return UsePaginatedList([QueryKeys.PostCommentList,postId],getList)
}