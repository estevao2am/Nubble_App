import {createTheme} from "@shopify/restyle"
import { ViewStyle } from "react-native";

export const palette = {
    greenPrimary: '#074C4E',
    greenPrimaryLight:'#EAF6F6',
    carrotSecondary:'#F86F2D',
    carrotSecondaryLight:'#FAE6DD',
    greenSuccess:'#4ABC86',
    greenSuccessLight:'#D8FFEC',
    redError:'#EA3838',
    redErrorLight:'#FBECEC',

    grayBlack: '#000000',
   gray1: '#636363',
   gray2: '#8E8E8E',
   gray3: '#B3B3B3',
   gray4: '#E1E1E1',
   gray5: '#F5F5F5',
   grayWhite: '#FFFFFF',
}

export const theme = createTheme({
    colors: {
      ...palette,
      //light Mode
      primary: palette.greenPrimary,
      
// Dark mode
     // primary: palette.carrotSecondary,

      primaryContrast: palette.grayWhite,

  
      buttonPrimary: palette.greenPrimary,
  
      //Light mode usage example
     background: palette.grayWhite,
      backgroundContrast: palette.grayBlack,

// Dark mode usage example
 //background: palette.grayBlack,
     // backgroundContrast: palette.grayWhite,

  
      error: palette.redError,
      errorLight: palette.redErrorLight,
  
      success: palette.greenSuccess,
      successLight: palette.greenSuccessLight,

      market:palette.carrotSecondary,
    },
    spacing:{
     s4: 4,  //spacing
     s8: 8,
     s10: 10,
     s12: 12,
     s14: 14,
     s16: 16,
     s20: 20,
     s24: 24,
     s32: 32,
     s40: 40,
     s48: 48,
     s56: 56,
    },
    borderRadii:{
        s8:8,
        s12:12,
        s16:16
    },

    textVariants:{
        defaults:{},
    }

})

// Configuracoes da tabBar (shadow)
export const $shadowProps: ViewStyle = {
    elevation:10,
    shadowColor:"#000",
    shadowOpacity:0.05,
    shadowRadius:12,
    shadowOffset:{width:0, height:-3}
}
export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors']