import { AppStackParamList } from "./AppStack";
import { AuthStackParamList } from "./AuthStack";
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { AppTabBottomTabParamList } from "./AppTabNavigator";
declare global {
    namespace ReactNavigation{
        interface RootParamList extends AuthStackParamList, AppStackParamList{}
    }
}

// Tipando as props 
// Para as rotas da aplicação quando o usauario esta logado
export type AppScreenProps<RouteName extends keyof AppStackParamList> = 
NativeStackScreenProps<AppStackParamList, RouteName >;


// Tipando as props das rotas que nao precisam de login ou seja fora da app
export type AuthScreenProps <RouteNAme extends keyof AuthStackParamList > = NativeStackScreenProps<AuthStackParamList, RouteNAme>

// Tipando o Tab Bottom 
export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;