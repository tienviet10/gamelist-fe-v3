import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { addFollowRoute } from '@app/constants/global/urls';

import { UserFollowIdResponse } from './types';

type UserFollowId = {
  userId: number;
};

const useAddFollow = () => {
  const addFollow = useCallback(
    async (params: UserFollowId): Promise<CustomAxiosResponse<UserFollowIdResponse>> =>
      client.post(`/${addFollowRoute}/${params.userId}`),
    []
  );

  const {
    mutate: addFollowMutation,
    data: followedUserData,
    error: addFollowError,
    isError: addFollowIsError,
  } = useMutation<CustomAxiosResponse<UserFollowIdResponse>, ErrorResponse, UserFollowId>({
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
