import { useQuery } from "@tanstack/react-query"
import { QueryKeys } from "../../../infra/infraTypes"
import { authService } from "../authService"
import { useDebounce } from '../../../infra/hooks/useDebounce';


interface Param<T extends {length: number}> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailableFunc: (value: T) => Promise<boolean>;
}

function useAuthIsValueAvailable<T extends {length: number}>({
  value,
  enabled,
  isAvailableFunc,
  queryKey,
}: Param<T>) {
  const debouncedValue = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFunc(debouncedValue),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedValue.length > 0,
  });
  const isDebouncing = debouncedValue !== value;

  return {
    // isAvailable: !!data,
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: username,
    enabled,
    isAvailableFunc: authService.isUsernameAvailable,
    queryKey: QueryKeys.IsUserNameAvailable,
  });
}
export function useAuthIsEmailAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: email,
    enabled,
    isAvailableFunc: authService.isEmailAvailable,
    queryKey: QueryKeys.IsUserEmailAvailable,
  });
}