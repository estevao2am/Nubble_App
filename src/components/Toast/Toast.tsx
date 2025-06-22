
import { Dimensions } from 'react-native';
import { $shadowProps } from '../../../src/theme/theme';
import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width *0.9

export function Toast(){
    return (
        <Box 
        top={100}
        {...$boxStyle}
        >
            <Icon color='success' name="checkRound" />
            <Text style={{flexShrink:1}} marginLeft='s16' preset='paragraphMedium' bold>Toast Component</Text>
        </Box>
    )
}


const $boxStyle:BoxProps = {
backgroundColor:'background',

        position:'absolute',
        alignSelf:'center',
        padding:'s16',
        alignItems:'center',
        borderRadius:'s16',
        flexDirection:'row',
        maxWidth:MAX_WIDTH,
        opacity:0.95,
        style:{...$shadowProps} // para boxshadon

}