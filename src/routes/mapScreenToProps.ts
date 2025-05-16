import { IconProps } from "../components/Icon/Icon";
import { AppTabBottomTabParamList } from "./AppTabNavigator";

// tipando as telas para permitir fazer mapeamento

export const mapScreenToProps: Record<keyof AppTabBottomTabParamList, 
{
    label:string;
    icon:{
        focused:IconProps['name'];
        unfocused:IconProps['name'];
    };
}
> = {
    HomeScreen : {
        label:'Inicio',
        icon:{
            focused:'homeFill',
            unfocused:'home'
        }
    },
    FavoriteScreen : {
        label:'Favoritos',
        icon:{
            focused:'bookmarkFill',
            unfocused:'bookmark'
        }
    },
    NewPostScreen : {
        label:'Novo post',
        icon:{
            focused:'newPost',
            unfocused:'newPost'
        }
    },
    MyProfile : {
        label:'Meu Perfil',
        icon:{
            focused:'profileFill',
            unfocused:'profile'
        }
    },
   
   
}
