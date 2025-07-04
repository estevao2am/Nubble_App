import {  useMutation } from "@tanstack/react-query";
import { authService } from "../authService";
import { AuthCredentials } from "../authTypes"; 
import { MutationOptions } from "../../../infra/hooks/useMutation";

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    //  user Token
    onSuccess: authCredentials => authService.updateToken(authCredentials.token)
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}