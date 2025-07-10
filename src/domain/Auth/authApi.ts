
import { api } from '../../api/apiConfig';
import { UserAPI } from '../User/userTypes';
import {AuthCredentialsAPI, FieldIsAvailableAPI, SignUpDataAPI} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI):Promise<UserAPI>{
const response = await api.post<UserAPI>('auth/register',data)
return response.data
}

// validar username se esta disponivel 
async function isUsernameAvailable(params: {
  username:string
}):Promise<FieldIsAvailableAPI>{
  const response = await api.get<FieldIsAvailableAPI>('validate-username', {
    params,
  });
  return response.data
}

async function isEmailAvailable(params: {
  email:string
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>('validate-email',{
    params
  })

  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isEmailAvailable,
  isUsernameAvailable
}



/**
 * @author Estevao Esteves
 * @description este arquivo é a porta de entrada de backend, ele define as regras 
 * nos endPoint ou seja a camada de serviço ! 
 */

