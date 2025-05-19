import React from 'react';
import {Box, BoxProps, TouchableOpacityBox} from '../Box/Box';
import {useAppSafeArea} from '../hooks/useAppSafeArea';
import {Icon} from '../../components/Icon/Icon';
//import {Text} from '../Text/Text';
import {Text} from '@components';
import { ScrollViewContainer, ViewContainer } from '../../screen/components/ScreenContainer';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useAppTheme } from '../hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?:boolean
}

export function Screen({
  children, 
  canGoBack = false,
  scrollable = false,
  style, // pegando o style do BoxProps para utilizar rescrever algumas propriedades
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
    style={[{padding: top,paddingBottom:bottom},style]} {...boxProps}> {/*  fazendo um marger mara rescrever as propriedades default  */}
      {canGoBack && (
        <TouchableOpacityBox 
        onPress={navigation.goBack}
        marginBottom="s24" flexDirection="row">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        </TouchableOpacityBox>
        
      )}

      {children}
    </Box>
    </Container>
    </KeyboardAvoidingView>
  );
}

// SRP => Single Responsibility Principle
