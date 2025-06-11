import { Text } from "@components";
import { useNavigation } from "@react-navigation/native";
import { Box, TouchableOpacityBox } from "../../components/Box/Box";
import { ScreenProps } from "../Screen";
import { Icon } from "../.../../../components/Icon/Icon";


const ICON_SIZE=20
type props = Pick<ScreenProps , 'title' | 'canGoBack'>
export function ScreenHeader({title,canGoBack} : props){
    const navigation = useNavigation()
    return (
        <Box  
         marginBottom="s24" 
         flexDirection="row"
        alignItems='center' 
        justifyContent='space-between'>
        {canGoBack && (

        <TouchableOpacityBox 
        onPress={navigation.goBack}
        flexDirection="row"
        alignItems='center' 
        >
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE}/>
          {!title && (<Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        )}
           </TouchableOpacityBox>
        
      )}
      {title && <Text preset="headingSmall">{title} </Text>}
          {title && (<Box  width={20} height={20}></Box>)}
       
        </Box>
    )
}

// a box com width de 20 serve para fazer um hack que pode facilitar a posicao dos elementos