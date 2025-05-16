import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import { AuthStack } from './AuthStack';

// Chamando as nossas rotas: Rotas autenticadas e não autenticadas

export function Router() {
  const authenticated = true;

  return (
    <NavigationContainer>
     {authenticated ? (<AppStack/>) : (<AuthStack/>)}
    </NavigationContainer>
  );
}
