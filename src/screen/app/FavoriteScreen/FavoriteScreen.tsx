import React from "react"

import { Text } from '../../../components/Text/Text';
import {  Screen,  } from '../../Screen';
import { AppTabScreenProps } from "../../../routes/navigationType";



export function FavoriteScreen({navigatio}:AppTabScreenProps<'FavoriteScreen'>){
    return (
        <Screen>
            <Text preset="headingSmall">Favorite Screen</Text>
        </Screen>
    )
}