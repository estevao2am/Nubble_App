

//definição do nosso dominio interno da aplicacao
export interface PostComment {
    id:number
    message:string
    createdAt:string,
    author:{
      id: number//1
        profileURL:string,
        name:string
        userName:string
    }
}


// Descricao da nossa API
export interface PostCommentAPI {

    id: number, //102,
      message: string//"Desidero qui solutio aurum ademptio carcer tardus.",
      user_id: number, //1,
      post_id: number //1,
      created_at: string,//"2025-05-20T11:32:22.000+00:00",
      updated_at: string,//"2025-05-20T20:34:05.820+00:00",
      user: {
        id:number // 1,
        first_name: string, //"Maria",
        last_name: string,//"Julia",
        username: string,//"mariajulia",
        email: string,//"mariajulia@coffstack.com",
        profile_url: string,//"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png",
        is_online: boolean, // false ou true
        full_name: string//"Maria Julia",
      }
        meta: any
      
}