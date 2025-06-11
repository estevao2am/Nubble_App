
import React from 'react';
import { Text } from '../../../components/Text/Text';
import {  Screen,  } from '../../Screen';
import { AppScreenProps } from '../../../routes/navigationType';

 
export function SettingScreen(props:AppScreenProps<'SettingScreen'>){
    return (
        <Screen canGoBack>
            <Text preset="headingSmall">Setting</Text>
        </Screen>
    );
}
