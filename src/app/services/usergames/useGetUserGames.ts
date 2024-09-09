import { useQuery } from '@tanstack/react-query';
import { CustomAxiosResponse, ErrorResponse, UserGamesByStatus } from '@app/constants/global/types';
import client from '@app/utils/authApi';
import { getUserGamesByStatus } from '@app/constants/global/urls';
import { useCallback, useMemo } from 'react';

type UserGamesType = {
  userGamesByStatus: UserGamesByStatus;
};

const useGetUserGames = () => {
  const getGames = useCallback(
    async (): Promise<CustomAxiosResponse<UserGamesType>> => client.get(getUserGamesByStatus),
    []
  );

  const {
    data: userGames,
    isInitialLoading: userDataIsLoading,
    refetch: getUserGames,
  } = useQuery<CustomAxiosResponse<UserGamesType>, ErrorResponse>({
    queryKey: ['userGames'],
    queryFn: getGames,
    enabled: false,
  });

  const memoizedReturnValues = useMemo(
    () => ({
      userGames,
      userDataIsLoading,
      getUserGames,
    }),
    [userGames, userDataIsLoading, getUserGames]
  );

  return memoizedReturnValues;
};

export default useGetUserGames;
