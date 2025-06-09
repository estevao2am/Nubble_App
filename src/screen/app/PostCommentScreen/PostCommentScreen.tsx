import {Text} from '../../../components/Text/Text';
import { Screen } from "../../../components/Screen/Screen";
import { AppScreenProps } from "../../../routes/navigationType";
import { Box } from "../../../components/Box/Box";



export function PostCommentScreen ({navigation}:AppScreenProps<'PostCommentScreen'>){
    return(
        <Screen canGoBack tile="Comentarios">
            <Box>
                <Text>Tela de comentarios</Text>
            </Box>
        </Screen>
    )
}