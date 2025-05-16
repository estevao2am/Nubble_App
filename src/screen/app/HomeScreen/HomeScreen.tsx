import React from "react"

import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { Screen } from '../../../components/Screen/Screen';

//mport {  Text } from '@components';
import { AppTabScreenProps } from "../../../routes/navigationType";



export function HomeScreen({navigation}:AppTabScreenProps<'HomeScreen'>){
    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button title="Settings" onPress={()=> navigation.navigate('SettingScreen')}/>
                <Button title="favorites" mt="s14" onPress={() => navigation.navigate('FavoriteScreen')} />
        </Screen>
    )
}