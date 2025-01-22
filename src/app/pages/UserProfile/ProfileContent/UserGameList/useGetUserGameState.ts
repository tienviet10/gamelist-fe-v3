import { useEffect } from 'react';

import useGetUserGame from '@app/services/usergames/useGetUserGame';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setUserGame, userGameReset } from '@app/store/userGameSlice';

const useGetUserGameState = (gameId: number | undefined) => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const { userGame, userGameDataIsLoading, getUserGame } = useGetUserGame(gameId);

  useEffect(() => {
    if (userGame?.data.data && userState.user.email !== '') {
      dispatch(setUserGame(userGame?.data.data.userGame));
    } else {
      dispatch(userGameReset());
    }
  }, [dispatch, userGame?.data.data, userState.user.email]);

  return { userGame, userGameDataIsLoading, getUserGame };
};

export default useGetUserGameState;
