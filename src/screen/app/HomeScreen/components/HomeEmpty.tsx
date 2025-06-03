import React from 'react';
import {ActivityIndicator} from '../../../../components/ActivityIndicator/ActivityIndicator';
import {Box} from '../../../..//components/Box/Box';
import {Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({loading, error,refetch}: Props) {
  let component = (
    <Text  bold preset="paragraphMedium">Não há publicações no seu feed</Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
        <>
      <Text preset="paragraphMedium" bold marginBottom='s16'>Não foi possivel carregar o feed 😓</Text>
      <Button title='recarregar' preset='outline' onPress={refetch}/>
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
