import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuthCredentials } from '../services/authCredentials/useAuthCredentials';
import { ActivityIndicator } from '../components/ActivityIndicator/ActivityIndicator';
import { Box } from '../components/Box/Box';

// Chamando as nossas rotas: Rotas autenticadas e não autenticadas

export function Router() {
  const {authCredentials,isLoading} = useAuthCredentials()

  if(isLoading){
    return (
        <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size="large" />
      </Box>
    )
  }
  


  return (
    <NavigationContainer>
     {authCredentials ? (<AppStack/>) : (<AuthStack/>)}
    </NavigationContainer>
  );
}
