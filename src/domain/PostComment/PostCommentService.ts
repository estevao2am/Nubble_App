import { Page } from "../../types/Pages";
import { PostComment } from "./postCommentTypes";
import { postCommentApi } from "./PostCommentApi";
import { apiAdapter } from "../../api/apiAdapter";
import { postCommentAdapter } from "./PostCommentAdapter";



const PER_PAGE = 10
async function getList(post_id:number,page:number):Promise<Page<PostComment>>{
    const postCommentPageApi = await postCommentApi.getList(post_id,{page,per_page:PER_PAGE})
    return {
        data:postCommentPageApi.data.map(postCommentAdapter.toPostComment),
        meta:apiAdapter.toMetaDataPage(postCommentPageApi.meta)
    }
}

export const postCommentService = {
    getList
}