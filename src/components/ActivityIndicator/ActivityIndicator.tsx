import React from 'react'
import { ActivityIndicatorProps, ActivityIndicator as RNActivityIndicator} from 'react-native'
import { ThemeColors } from '../../theme/theme'
import { useAppTheme } from '../hooks/useAppTheme'

interface Props extends Omit<ActivityIndicatorProps, 'color'>{
    color : ThemeColors
}

export function ActivityIndicator({color}:Props){

// Importing personal hooks
const {colors} = useAppTheme()
    return <RNActivityIndicator color={colors[color]}/>
}