import { useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { removeFollowRoute } from '@app/constants/global/urls';

import type { UserFollowIdResponse } from './types';

type UserFollowId = {
  userId: number;
};

const useRemoveFollow = () => {
  const queryClient = useQueryClient();

  const removeFollow = async (params: UserFollowId): Promise<CustomAxiosResponse<UserFollowIdResponse>> =>
    client.delete(`/${removeFollowRoute}/${params.userId}`);

  const {
    mutate: removeFollowMutation,
    data: removedFollowedUserData,
    error: removeFollowError,
    isError: removedFollowIsError,
  } = useMutation<CustomAxiosResponse<UserFollowIdResponse>, ErrorResponse, UserFollowId>({
    mutationFn: removeFollow,
    onSuccess: () => {
      // TODO: Pessimistic update the whole cache -> do pessimistic update for only the unfollowed user
      queryClient.fetchQuery({ queryKey: ['follows'] });
    },
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      removeFollowMutation,
      removedFollowedUserData,
      removeFollowError,
      removedFollowIsError,
    }),
    [removeFollowMutation, removedFollowedUserData, removeFollowError, removedFollowIsError]
  );

  return memoizedReturnedValues;
};

export default useRemoveFollow;
