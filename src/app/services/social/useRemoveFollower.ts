import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { removeFollowerRoute } from '@app/constants/global/urls';

import { UserFollowIdResponse } from './types';

type UserFollowId = {
  userId: number;
};

const useRemoveFollower = () => {
  const queryClient = useQueryClient();

  const removeFollower = useCallback(
    async (params: UserFollowId): Promise<CustomAxiosResponse<UserFollowIdResponse>> =>
      client.delete(`/${removeFollowerRoute}/${params.userId}`),
    []
  );

  const {
    mutate: removeFollowerMutation,
    data: removedFollowerUserData,
    error: removeFollowerError,
    isError: removedFollowerIsError,
  } = useMutation<CustomAxiosResponse<UserFollowIdResponse>, ErrorResponse, UserFollowId>({
    mutationFn: removeFollower,
    onSuccess: () => {
      queryClient.fetchQuery({ queryKey: ['follows'] });
    },
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      removeFollowerMutation,
      removedFollowerUserData,
      removeFollowerError,
      removedFollowerIsError,
    }),
    [removeFollowerMutation, removedFollowerUserData, removeFollowerError, removedFollowerIsError]
  );

  return memoizedReturnedValues;
};

export default useRemoveFollower;
