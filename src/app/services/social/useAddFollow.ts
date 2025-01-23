import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { addFollowRoute } from '@app/constants/global/urls';

import type { FollowedUserData } from './types';

type UserFollowId = {
  id: number;
};

const useAddFollow = () => {
  const addFollow = useCallback(
    async (params: UserFollowId): Promise<CustomAxiosResponse<FollowedUserData>> =>
      client.post(`/${addFollowRoute}/${params.id}`),
    []
  );

  const {
    mutate: addFollowMutation,
    data: followedUserData,
    error: addFollowError,
    isError: addFollowIsError,
  } = useMutation<CustomAxiosResponse<FollowedUserData>, ErrorResponse, UserFollowId>({
    mutationFn: addFollow,
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      addFollowMutation,
      followedUserData,
      addFollowError,
      addFollowIsError,
    }),
    [addFollowMutation, followedUserData, addFollowError, addFollowIsError]
  );

  return memoizedReturnedValues;
};

export default useAddFollow;
