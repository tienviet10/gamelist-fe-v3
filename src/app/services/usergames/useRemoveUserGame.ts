import { useCallback, useMemo } from 'react';

import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { userGameRoute } from '@app/constants/global/urls';
import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

type RemoveUserGameResponse = {
  userGame: {
    id: number;
    gameStatus: string;
    startDate: null;
    completedDate: null;
    isPrivate: boolean;
    rating: null;
    gameNote: null;
    createdAt: string;
    updatedAt: string;
  };
};

const useRemoveUserGame = () => {
  const removeUserGame = useCallback(
    async (gameIdParam: number): Promise<CustomAxiosResponse<RemoveUserGameResponse>> =>
      client.delete(`/${userGameRoute}/${gameIdParam}`),
    []
  );

  const {
    mutate: removeUserGameMutation,
    data: removeUserGameResponse,
    error: removeUserGameError,
    isError: removeUserGameIsError,
  } = useMutation<CustomAxiosResponse<RemoveUserGameResponse>, ErrorResponse, number>({
    mutationFn: removeUserGame,
  });

  const memoizedReturnValues = useMemo(
    () => ({
      removeUserGameMutation,
      removeUserGameResponse,
      removeUserGameError,
      removeUserGameIsError,
    }),
    [removeUserGameMutation, removeUserGameResponse, removeUserGameError, removeUserGameIsError]
  );

  return memoizedReturnValues;
};

export default useRemoveUserGame;
