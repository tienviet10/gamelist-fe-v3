import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { INITIAL_USER_STATE } from '@app/constants/global/constants';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setUser } from '@app/store/userSlice';
import { Button } from '@lib/Button/Button';

function LoginLogoutButton() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const userState = useAppSelector((state) => state.user);

  const logoutFunc = useCallback(() => {
    localStorage.clear();
    dispatch(setUser(INITIAL_USER_STATE.user));

    // TODO: Clear all cache that has user related information HERE
    queryClient.removeQueries({ queryKey: ['user'] });

    navigate('/login');
  }, [dispatch, navigate, queryClient]);

  return (
    <div className="flex space-x-2">
      {userState.user?.email ? (
        <Button className="text-white" onClick={logoutFunc}>
          Logout
        </Button>
      ) : (
        <>
          <Button
            className="text-white"
            onClick={() => {
              navigate('/login');
            }}
            variant="ghost"
          >
            Login
          </Button>
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign up
          </Button>
        </>
      )}
    </div>
  );
}

export default LoginLogoutButton;
