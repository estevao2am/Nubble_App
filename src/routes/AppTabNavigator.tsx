import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { HomeScreen } from "../screen/app/HomeScreen/HomeScreen"
import { MyProfile } from "../screen/app/MyProfileScreen/MyProfileScreen"
import { FavoriteScreen } from '../screen/app/FavoriteScreen/FavoriteScreen';
import { NewPostScreen } from '../screen/app/NewPostScreen/NewPostScreen';


export type AppTabBottomTabParamList = {
    HomeScreen : undefined,
    MyProfile : undefined
    FavoriteScreen: undefined,
    NewPostScreen: undefined,

}

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>()

export function AppTabNavigator (){
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown:false
        }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="MyProfile" component={MyProfile}/>
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen}/>
            <Tab.Screen name="NewPostScreen" component={NewPostScreen}/>

        </Tab.Navigator>

    )
    }
