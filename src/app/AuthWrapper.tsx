import React, { useEffect } from 'react';
import { isExpired } from 'react-jwt';

import useGetUser from '@app/services/authentication/useGetUser';
import { useAppDispatch } from '@app/store/hooks';
import { setUser } from '@app/store/userSlice';

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { getUserData, userDataIsLoading, userInfo } = useGetUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem('token');

    if (authToken !== null && !isExpired(authToken)) {
      getUserData();
    } else {
      localStorage.clear();
      // dispatch(setLoading(false));
    }
  }, [getUserData]);

  useEffect(() => {
    if (userDataIsLoading) return;

    if (userInfo?.data?.data?.email) {
      console.log('hereeeee');
      dispatch(setUser(userInfo?.data?.data));
    }
  }, [dispatch, userDataIsLoading, userInfo]);
  console.log('first....');

  if (!userInfo?.data?.data?.email) return;

  return <div>{children}</div>;
}

export default AuthWrapper;
