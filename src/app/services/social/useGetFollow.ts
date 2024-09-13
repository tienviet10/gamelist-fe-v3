import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';

import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { getAllFollowRoute } from '@app/constants/global/urls';

import { FollowDataType } from './types';

const useGetFollow = () => {
  const getFollows = useCallback(
    async (): Promise<CustomAxiosResponse<FollowDataType>> => client.get(getAllFollowRoute),
    []
  );

  const {
    data: followData,
    isInitialLoading: followDataIsLoading,
    refetch: refetchFollowData,
  } = useQuery<CustomAxiosResponse<FollowDataType>, ErrorResponse>({
    queryKey: ['follows'],
    queryFn: getFollows,
    enabled: false,
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      followData,
      followDataIsLoading,
      refetchFollowData,
    }),
    [followData, followDataIsLoading, refetchFollowData]
  );

  return memoizedReturnedValues;
};

export default useGetFollow;