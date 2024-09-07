import { CustomAxiosResponse, ErrorResponse, UserData } from '@app/constants/global/types';
import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

const useGetUser = () => {
  const getUser = useCallback(
    async (): Promise<CustomAxiosResponse<UserData>> => client.get(`/user-service/api/v1/user/userinfo`),
    []
  );

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
