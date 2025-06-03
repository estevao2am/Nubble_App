import { PostComment, PostCommentAPI } from "./postCommentTypes";




// este adapter tem a funcão de passar os dados recebidos da api pra a nossa interface da aplicacao
function toPostComment(postCommentAPI:PostCommentAPI):PostComment {
    return {

        id:postCommentAPI.id,
        message:postCommentAPI.message,
        createdAt:postCommentAPI.created_at,
        author:{
            id:postCommentAPI.user.id,
            name:postCommentAPI.user.full_name,
            profileURL:postCommentAPI.user.profile_url,
            userName:postCommentAPI.user.username
        }
    }
}

export const postCommentAdapter = {
    toPostComment
}