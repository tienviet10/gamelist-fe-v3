import { useEffect, useState } from 'react';
import { isExpired } from 'react-jwt';
import { Navigate, Outlet } from 'react-router-dom';

import useGetUser from '@app/services/authentication/useGetUser';
import { useAppDispatch } from '@app/store/hooks';
import { setUser } from '@app/store/userSlice';

export default function ProtectedRoute() {
  const { getUserData, userDataIsLoading, userInfo } = useGetUser();
  const dispatch = useAppDispatch();
  const [initAuth, setInitAuth] = useState(false);

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
      dispatch(setUser(userInfo?.data?.data));
    }

    setInitAuth(true);
  }, [dispatch, userDataIsLoading, userInfo]);

  if (userDataIsLoading || !initAuth) return;

  return userInfo?.data?.data?.email ? <Outlet /> : <Navigate to="/login" />;
}
