import { api } from '../../api/apiConfig';
import {PageAPI, pageParams} from '../../api/apiTypes';
import {PostAPI} from './postTypes';

async function getList(params?:pageParams): Promise<PageAPI<PostAPI>> {
 // await new Promise(resolve => setTimeout(()=> resolve(''),2000))
const response = await api.get<PageAPI<PostAPI>>('user/post',{
  params
})
return response.data

}

export const postApi = {
  getList,
};
