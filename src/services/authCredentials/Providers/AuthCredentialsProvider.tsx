import { createContext, useEffect, useState } from "react";
import React from 'react'
import { AuthCredentialsService } from "../authCredentialsTypes";
import { AuthCredentials } from "../../../domain/Auth/authTypes";
import { authCredentialsStorage } from "../authCredentialsStorage";
import { authService } from "../../../domain/Auth/authService";


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
  const [isLoading, setIsLoading ] = useState(true);



  useEffect(() => {
//authCredentialsStorage.remove()
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
       await new Promise(resolve => setTimeout(resolve, 2000, '')); // para dar uma delay
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }


  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);


  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}