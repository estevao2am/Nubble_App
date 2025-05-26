import { Post } from "./types";
import { postListMock } from './postListMock';


async function getList() :Promise<Post[]> {
    // Simular um delay antes de renserizar a chamada da api
    await new Promise(resolve => setTimeout(() => resolve(''),2000));
    return postListMock
}


export const postApi = {
    getList,
}