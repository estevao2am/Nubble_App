import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { HomeScreen } from "../screen/app/HomeScreen/HomeScreen"
import { MyProfile } from "../screen/app/MyProfileScreen/MyProfileScreen"
import { FavoriteScreen } from '../screen/app/FavoriteScreen/FavoriteScreen';
import { NewPostScreen } from '../screen/app/NewPostScreen/NewPostScreen';
import { AppTabBar } from "./AppTabBar";


export type AppTabBottomTabParamList = {
    HomeScreen : undefined,
    MyProfile : undefined
    FavoriteScreen: undefined,
    NewPostScreen: undefined,

}

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>()

export function AppTabNavigator (){

// importando a navegacao personalizado

function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

    return (
        <Tab.Navigator 
        tabBar={renderTabBar} // Usando a tab personalizado
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
              paddingTop: 20,
            },
        }}
        >
             <Tab.Screen name="HomeScreen" component={HomeScreen}/>
             <Tab.Screen name="NewPostScreen" component={NewPostScreen}/>

            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen}/>
          
            <Tab.Screen name="MyProfile" component={MyProfile}/>


        </Tab.Navigator>

    )
    }
