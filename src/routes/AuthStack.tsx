import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { ForgotPasswordScreen } from "../screen/auth/ForgotPasswordScreen/ForgotPasswordScreen"
import { LoginScreen } from "../screen/auth/LoginScreen/LoginScreen"
import { SignUpScreen } from "../screen/auth/SignUpScreen/SignUpScreen"
import { SuccessScreen } from "../screen/auth/SuccessScreen/SuccessScreen"
import { IconProps } from "../components/Icon/Icon"

// Rotas que o usuario tem acesso apos ter feito o login, appstack ou rotas do app, rotas privadas

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;

  SuccessScreen: {
    // estes parametros permintirão altertar os atributos e reaproveitar a tela
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>; // o Pick permite escolher ou selecionar atributos a serem utilizados
  };
  ForgotPasswordScreen: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthStack (){
    return (
      
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        
</Stack.Navigator>
    )
}