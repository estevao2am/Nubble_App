import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { SettingScreen } from "../screen/app/SettingScreen/SettingScreen"
import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator"
import { NavigatorScreenParams } from "@react-navigation/native"

// Rotas que o usuario tem acesso apos ter feito o login, appstack ou rotas do app, rotas privadas

export type AppStackParamList = {
   // HomeScreen: undefined,
   AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>
    SettingScreen:undefined,
    
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStack (){
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                fullScreenGestureEnabled:true // funcionalidade de foltar com dedo
            }}
            initialRouteName="AppTabNavigator"
        >

            <Stack.Screen name="AppTabNavigator" component={AppTabNavigator}/>
            <Stack.Screen name="SettingScreen" component={SettingScreen}/>


        </Stack.Navigator>
    )
}