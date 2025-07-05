import { createContext, useState } from "react";
import React from 'react'
import { AuthCredentialsService } from "../authCredentialsTypes";
import { AuthCredentials } from "../../../domain/Auth/authTypes";


export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsloading] = useState(true);

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    // TODO: persist

    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    // TODO: persist
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}