import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { userGameRoute } from '@app/constants/global/urls';
import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

type EditUserGameParams = {
  gameId: number;
  gameStatus?: string | null;
  gameNote?: string;
  isPrivate?: boolean;
  rating?: number | null;
  completedDate?: string;
  startDate?: string;
};

type EditUserGameType = Omit<EditUserGameParams, 'gameId'> & {
  id: number;
  createdAt: string;
  updatedAt: string;
};

type EditUserGameResponse = {
  userGame: EditUserGameType;
};

const useEditUserGame = () => {
  const editExistedUserGame = useCallback(
    async (params: EditUserGameParams): Promise<CustomAxiosResponse<EditUserGameResponse>> => {
      const { gameStatus } = params;
      const putParams = { ...params };

      if (gameStatus?.trim() === '' || !gameStatus) {
        putParams.gameStatus = 'JustAdded';
      }

      return client.put(userGameRoute, putParams);
    },
    []
  );

  const createNewUserGame = useCallback(
    async (params: EditUserGameParams): Promise<CustomAxiosResponse<EditUserGameResponse>> => {
      const { gameStatus } = params;
      const postParams = { ...params };

      if (gameStatus?.trim() === '' || !gameStatus) {
        postParams.gameStatus = 'JustAdded';
      }

      return client.post(userGameRoute, postParams);
    },
    []
  );

  const {
    mutate: editUserGame,
    data: userGameResponseData,
    error: usergameDataError,
    isError: usergameDataIsError,
  } = useMutation<CustomAxiosResponse<EditUserGameResponse>, ErrorResponse, EditUserGameParams>({
    mutationFn: editExistedUserGame,
  });

  const { mutate: createUserGame, data: newUserGameResponseData } = useMutation<
    CustomAxiosResponse<EditUserGameResponse>,
    ErrorResponse,
    EditUserGameParams
  >({
    mutationFn: createNewUserGame,
  });

  const memoizedReturnValues = useMemo(
    () => ({
      createUserGame,
      newUserGameResponseData,
      editUserGame,
      userGameResponseData,
      usergameDataError,
      usergameDataIsError,
    }),
    [
      createUserGame,
      newUserGameResponseData,
      editUserGame,
      userGameResponseData,
      usergameDataError,
      usergameDataIsError,
    ]
  );

  return memoizedReturnValues;
};

export default useEditUserGame;
