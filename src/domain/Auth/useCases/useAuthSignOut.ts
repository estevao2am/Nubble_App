import { useMutation } from "@tanstack/react-query";
import { authService } from "../authService";
import { useAuthCredentials } from "../../../services/authCredentials/useAuthCredentials";

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials()
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess:removeCredentials
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
}