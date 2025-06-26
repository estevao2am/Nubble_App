//import { useCallback, useEffect, useState } from "react";
import { userService } from "./userService";
//import { User } from "./userTypes";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../infra/infraTypes";






export function useUserGetById(id: number) {


// const [user, setUser] = useState<User>();
//   const [error, setError] = useState<boolean | null>(null);
//   const [loading, setLoading] = useState(false);

const {data,isLoading, isError,refetch,isFetching} = useQuery({
  queryKey:[QueryKeys.UserGetById,id], // passando o id para fazer o cache e troca de cache
  queryFn:()=> userService.getById(id),
  staleTime:1000 * 30 // 10 seconds
})

//   const getUserById = useCallback(async () => {
//     try {
//       setLoading(true);
//       const _user = await userService.getById(id);
//       setUser(_user);
//     } catch (er) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }, [id]);

//   useEffect(() => {
//     getUserById();
//   }, [getUserById]);



  return {
    user:data,
    isError,
    isLoading,
    refetch,
    isFetching
  };
}