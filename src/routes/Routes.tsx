import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuthCredentials } from '../services/authCredentials/useAuthCredentials';

// Chamando as nossas rotas: Rotas autenticadas e não autenticadas

export function Router() {
  //const authenticated = false;
  //console.log(authenticated)
  const {authCredentials} = useAuthCredentials()

  return (
    <NavigationContainer>
     {authCredentials ? (<AppStack/>) : (<AuthStack/>)}
    </NavigationContainer>
  );
}
