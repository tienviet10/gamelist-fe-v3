import { useEffect } from 'react';

import { INITIAL_USER_GAME_BY_ID_STATE } from '@app/constants/global/constants';
import useGetUserGame from '@app/services/usergames/useGetUserGame';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setUserGameReducer } from '@app/store/userGameSlice';

const useGetUserGameState = (gameId: number | undefined) => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const { userGame, userGameDataIsLoading, getUserGame } = useGetUserGame(gameId);

  useEffect(() => {
    if (userGame?.data.data && userState.user.email !== '') {
      dispatch(
        setUserGameReducer({
          type: 'userGame',
          payload: userGame?.data.data.userGame,
        })
      );
    } else {
      dispatch(
        setUserGameReducer({
          type: 'userGame',
          payload: INITIAL_USER_GAME_BY_ID_STATE,
        })
      );
    }
  }, [dispatch, userGame?.data.data, userState.user.email]);

  return { userGame, userGameDataIsLoading, getUserGame };
};

export default useGetUserGameState;
