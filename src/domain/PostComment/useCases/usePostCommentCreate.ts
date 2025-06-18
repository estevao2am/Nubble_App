import { useState } from "react"
import { postCommentService } from "../PostCommentService"
import { PostComment } from "../postCommentTypes"

interface Options {
    onSuccess?:(data:PostComment)=> void
    onError?: (message:string) => void
}

export function usePostCommentCreate(postId:number,options?:Options) {
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState<boolean | null>(null)

    async function createComment(message:string){
        try{
            setLoading(true)
            setError(null)
          const PostCommentData =   await postCommentService.create(postId,message)
          if(options?.onSuccess){
            options.onSuccess(PostCommentData)
          }
        }catch(error){
            if(options?.onError){
                options.onError("Erro ao criar comentario")
            }
            setError(false)

        }finally{
            setLoading(false)
        }
    }
    return {
        error,loading,createComment
    }
}