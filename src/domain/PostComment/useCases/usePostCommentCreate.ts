import { MutationOptions, useMutation } from "../../../infra/hooks/useMutation"
import { postCommentService } from "../PostCommentService"
import { PostComment } from "../postCommentTypes"


export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );
  
  async function createComment(message:string){
    await mutate({message})
  }

    return {
        error,loading,createComment
    }
}