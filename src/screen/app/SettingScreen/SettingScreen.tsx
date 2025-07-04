
import React from 'react';
import {  Screen,  } from '../../Screen';
import { AppScreenProps } from '../../../routes/navigationType';
import { Button } from '@components';
import { useAuthSignOut } from '../../../domain/Auth/useCases/useAuthSignOut';

 
export function SettingScreen({}:AppScreenProps<'SettingScreen'>){
    const {isLoading,signOut} = useAuthSignOut()
    return (
        <Screen canGoBack title='Configurações'>
            <Button loading={isLoading}  title='Sair da conta'  onPress={signOut}/>
        </Screen>
    );
}
