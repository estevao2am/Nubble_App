import { User, UserAPI } from "../User/userTypes";


export interface AuthCredentials {
    token : string,
    user:User
}

export interface AuthCredentialsAPI {

    auth:{
        type:string, // bearer 
        token:string // 'neefgeufgefugrfgfgfgrfgrfg'
    };
    user: UserAPI;
}

export interface SignInData {
    username:string,
    email?:string,
    password:string
}

// create user account API data
export interface SignUpDataAPI {
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    password:string
}

// create user account application data
export interface SignUpData {
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    password:string
}

// validacao de campos , email, username la na api
export interface FieldIsAvailableAPI {
    message:string;
    isAvailable:boolean
}

export interface ForgotPasswordParam{
    email:string
}