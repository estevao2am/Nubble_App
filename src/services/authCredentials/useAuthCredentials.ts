// hook  extends authcredentials

import { create } from "zustand";
import { AuthCredentialsService } from "./authCredentialsTypes";
import { persist } from "zustand/middleware";
import { storage } from "../storage/storage";


export function useAuthCredentials():AuthCredentialsService{
    return useAuthCredentialsZustand()
   } 


    const useAuthCredentialsZustand = create<AuthCredentialsService>()(
        persist( 
        set => ({
        authCredentials:null,
        isLoading:false,
        saveCredentials:async ac => set({authCredentials:ac}),
        remove: async () => set({authCredentials:null})
    }),
    {
name:'@Auth',
    storage:storage,
    }
))



