import { api } from '../../api/apiConfig'
import { PageAPI, pageParams } from '../../api/apiTypes'
import { PostCommentAPI } from './postCommentTypes'

const PATH = 'user/post_comment'

async function getList(
    post_id: number,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    pageParams?: pageParams
    
): Promise<PageAPI<PostCommentAPI>> {
    const response = await api.get<PageAPI<PostCommentAPI>>(PATH, {
        params: {
            post_id,
            ...pageParams,
        },
    })
    return response.data
}

async function create(
    post_id: number,
    message: string
): Promise<PostCommentAPI> {
    const response = await api.post<PostCommentAPI>(PATH, {
        post_id,
        message,
    })

    return response.data
}

async function remove(postCommentId: number): Promise<{ message: string }> {
    const response = await api.delete<{ message: string }>(
        `${PATH}/${postCommentId}`
    )
    return response.data
}

export const postCommentApi = {
    getList,
    create,
    remove,
}

// este arquivo é responsavel de fazer a interligacao direita com os dados da api
// ele é ligado com a interface que vem da api ou seja os datas ou json da api
