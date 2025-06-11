import { Icon } from "../../../components/Icon/Icon";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../Screen";
import { Text } from "../../../components/Text/Text";
import { AuthScreenProps } from "../../../routes/navigationType";



export function SuccessScreen({route,navigation}:AuthScreenProps<'SuccessScreen'>){

    function goBackToBegin(){
        navigation.goBack()

    }
    return (
        <Screen>
            <Icon {...route.params.icon}/>
            <Text preset="headingLarge" mt="s24">{route.params.title}</Text>
            <Text preset="paragraphLarge" mt="s16">{route.params.description} </Text>
            <Button onPress={goBackToBegin} mt='s40' title="Voltar ao inicio"/>
        </Screen>
    )
}