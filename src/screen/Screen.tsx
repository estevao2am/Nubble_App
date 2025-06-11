import React from 'react';
import {Box, BoxProps} from '../components/Box/Box';
import {useAppSafeArea} from '../components/hooks/useAppSafeArea';
//import {Text} from '@components';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useAppTheme } from '../components/hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeader } from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?:boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,title, // pegando o style do BoxProps para utilizar rescrever algumas propriedades
  //style={{paddingBottom:0}} // para evitar o padding do bottom tab bar
...boxProps
}: ScreenProps) {
  const {top,bottom} = useAppSafeArea();
  const {colors} = useAppTheme()
const Container = scrollable ? ScrollViewContainer : ViewContainer;

const navigation = useNavigation()

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS ==='ios' ? 'padding': undefined}
    style={{flex:1}}
    >
    <Container backgroundColor={colors.background}>
    <Box 
    paddingHorizontal='s24'
    style={[{padding: top,paddingBottom:bottom},style]} {...boxProps}> 
   
      <ScreenHeader canGoBack={canGoBack} title={title}/>
      {children}
    </Box>
    </Container>
    </KeyboardAvoidingView>
  );
}

// SRP => Single Responsibility Principle
