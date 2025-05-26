import React from 'react';
import {Box, BoxProps} from '../../../../components/Box/Box';
import {Icon} from '../../../../components/Icon/Icon';
import {useAppSafeArea} from '../../../../components/hooks/useAppSafeArea';
import { SimpleLogo } from '../../../../brand/SimpleLogo';

export function HomeHeader() {
  const {top} = useAppSafeArea(); // pegando o padding do topo do IOS e android
  // const {bottom} = useAppSafeArea() // pegando o padding do bottom do IOS e android
  return (
    <Box
   {...$wrapper}
      style={{paddingTop: top}}>
        <SimpleLogo width={70} />
      <Box flexDirection="row" gap='s24'>
        <Icon name="search" />
        <Icon name="bellOn" />
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper:BoxProps = {
       flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:"s24",
      paddingBottom:"s24"
}