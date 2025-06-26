

import { Text } from '@components';
import { ActivityIndicator } from '../../../components/ActivityIndicator/ActivityIndicator';
import { Box } from '../../../components/Box/Box';
import { ProfileAvatar } from '../../../components/ProfileAvatar/ProfileAvatar';
import { useUserGetById } from '../../../domain/User/useUserGetById';
import { AppScreenProps } from '../../../routes/navigationType';
import { Screen } from '../../../screen/Screen';
import { ScrollView, RefreshControl } from 'react-native';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user,refetch,isFetching} = useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator color={'primary'} />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView 
        style={{flex:1}}
        refreshControl ={<RefreshControl refreshing={isFetching} onRefresh={refetch}/>}

        >
        <Box alignItems="center" flex={1}>
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
        </ScrollView>
      )}
    </Screen>
  );
}