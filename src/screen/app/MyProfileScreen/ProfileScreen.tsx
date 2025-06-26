

import { Text } from '@components';
import { ActivityIndicator } from '../../../components/ActivityIndicator/ActivityIndicator';
import { Box } from '../../../components/Box/Box';
import { ProfileAvatar } from '../../../components/ProfileAvatar/ProfileAvatar';
import { useUserGetById } from '../../../domain/User/useUserGetById';
import { AppScreenProps } from '../../../routes/navigationType';
import { Screen } from '../../../screen/Screen';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator color={'primary'} />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
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
      )}
    </Screen>
  );
}