import { useMutation, useQueryClient } from "@tanstack/react-query"
import { MutationOptions } from "../../../infra/hooks/useMutation"
import { postCommentService } from "../PostCommentService"
import { PostComment } from "../postCommentTypes"
import { QueryKeys } from "../../../infra/infraTypes"


export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient()


  const {mutate,isError,isPending}  = useMutation<PostComment, unknown, {message:string}>({
    mutationFn:variables => postCommentService.create(postId,variables.message),
    onSuccess:data => {
      queryClient.invalidateQueries({
        queryKey:[QueryKeys.PostCommentList, postId],
      })
      if (options?.onSuccess){
        options.onSuccess(data)
      }
    },
    onError:() => {
      if(options?.onError){
        options.onError(options?.errorMessage || 'ocorreu um erro')
      }
    }
  })
  // const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
  //   ({message}) => postCommentService.create(postId, message),
  //   options,
  // );
  
  async function createComment(message:string){
    await mutate({message})
  }

    return {
        isError,isPending,createComment
    }
}