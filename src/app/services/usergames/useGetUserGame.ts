import { useCallback, useMemo } from 'react';
import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';
import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { userGameRoute } from '@app/constants/global/urls';

type UserGamesByGameID = {
  id: number;
  gameStatus: string;
  startDate: string;
  completedDate: string;
  isPrivate: boolean;
  rating: number;
  gameNote: string;
  createdAt: string;
  updatedAt: string;
};

type UserGameType = {
  userGame: UserGamesByGameID;
};

const useGetUserGame = (gameId: number | undefined) => {
  const getGame = useCallback(
    async (): Promise<CustomAxiosResponse<UserGameType>> => client.get(`/${userGameRoute}/${gameId}`),
    [gameId]
  );

  const {
    data: userGame,
    isInitialLoading: userGameDataIsLoading,
    refetch: getUserGame,
  } = useQuery<CustomAxiosResponse<UserGameType>, ErrorResponse>({
    queryKey: ['userGame', gameId],
    queryFn: getGame,
    enabled: !!gameId,
  });

  const memoizedReturnValues = useMemo(
    () => ({
      userGame,
      userGameDataIsLoading,
      getUserGame,
    }),
    [userGame, userGameDataIsLoading, getUserGame]
  );

  return memoizedReturnValues;
};

export default useGetUserGame;
