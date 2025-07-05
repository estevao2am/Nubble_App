// hook  extends authcredentials

import { create } from "zustand";
import { AuthCredentialsService } from "./authCredentialsTypes";
import { persist } from "zustand/middleware";
import { storage } from "../storage/storage";
import { useContext } from "react";
import { AuthCredentialsContext } from "./Providers/AuthCredentialsProvider";


export function useAuthCredentials():AuthCredentialsService{
    //return useAuthCredentialsZustand()
    const context = useContext(AuthCredentialsContext)
    if(!context){
        throw new Error (
            'AuthCredentials should be used within a AuthCredentialsProvider',
        )
    }
    return context

   } 


//  Zustand    
// const useAuthCredentialsZustand = create<AuthCredentialsService>()(

//         persist( 
//         set => ({
//         authCredentials:null,
//         isLoading:false,
//         saveCredentials:async ac => set({authCredentials:ac}),
//         removeCredentials: async () => set({authCredentials:null})
//     }),
//     {
// name:'@Auth',
//     storage:storage,
//     }
// ))



