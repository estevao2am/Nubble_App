import {api} from '../../api/apiConfig';
import {PageAPI, pageParams} from '../../api/apiTypes';
import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: pageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

async function create(post_id:number, message:string):Promise<PostCommentAPI>{
  const response = await api.post<PostCommentAPI>('user/post_comment',{
    post_id,
    message
  })

  return response.data
}

export const postCommentApi = {
  getList,
  create
};

// este arquivo é responsavel de fazer a interligacao direita com os dados da api
// ele é ligado com a interface que vem da api ou seja os datas ou json da api
