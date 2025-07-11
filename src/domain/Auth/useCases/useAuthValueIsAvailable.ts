import { useQuery } from "@tanstack/react-query"
import { QueryKeys } from "../../../infra/infraTypes"
import { authService } from "../authService"
import { useDebounce } from '../../../infra/hooks/useDebounce';


interface Params {
    username:string;
    enabled:boolean
}


export function useAuthIsUsernameAvailable({username,enabled}:Params){
    const debouncedUsername = useDebounce(username, 1500)
    const {data, isFetching} = useQuery({
        queryKey:[QueryKeys.IsUserNameAvailable, debouncedUsername],
        queryFn: () => authService.isEmailAvailable(debouncedUsername),
        retry:false,
        staleTime:20000,
        enabled:enabled && debouncedUsername.length>0  // precisa ser maior que o 0
    }) 

    const isDebouncing = debouncedUsername !==username;

    return {
      //
      //   isAvailable: !!data,
      isUnavailable:data ==false,  
      isFetching: isFetching || isDebouncing
    }
}

// filtros de validacao de dados disponiveis