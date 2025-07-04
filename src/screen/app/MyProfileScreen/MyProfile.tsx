import React from "react"

import { Text } from '../../../components/Text/Text';
import {  Screen,  } from '../../Screen';
import { Icon } from "../../../components/Icon/Icon";
import { Box } from "../../../components/Box/Box";
import { AppScreenProps } from "../../../routes/navigationType";
import { useAuthCredentials } from "../../../services/authCredentials/useAuthCredentials";



export function MyProfile({navigation}:AppScreenProps<'MyProfile'>){
    const {authCredentials} = useAuthCredentials()
    const name = authCredentials?.user.fullName
    return (
        <Screen>
            <Box flexDirection="row" 
            justifyContent="space-between"
            alignItems="center">

        {name && <Text preset="headingMedium">{name}</Text>}
            <Icon name="settings"
            onPress={()=> navigation.navigate('SettingScreen')}
            />

            </Box>
        </Screen>
    )
}