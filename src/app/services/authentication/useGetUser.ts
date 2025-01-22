import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';

import type { CustomAxiosResponse, ErrorResponse, UserData } from '@app/constants/global/types';
import { userInfoRoute } from '@app/constants/global/urls';

const useGetUser = () => {
  const getUser = useCallback(async (): Promise<CustomAxiosResponse<UserData>> => client.get(userInfoRoute), []);

  const {
    data: userInfo,
    error: userDataError,
    isLoading: userDataIsLoading,
    refetch: getUserData,
  } = useQuery<CustomAxiosResponse<UserData>, ErrorResponse>({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: false,
  });

  const memoizedReturnedValues = useMemo(
    () => ({ userInfo, userDataIsLoading, getUserData, userDataError }),
    [userInfo, userDataIsLoading, getUserData, userDataError]
  );

  return memoizedReturnedValues;
};

export default useGetUser;
