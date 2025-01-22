import { INITIAL_USER_GAME_BY_ID_STATE } from '@app/constants/global/constants';
import { UserGamesByGameID } from '@app/constants/global/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateUserGameType } from './types';

const initialState: InitialStateUserGameType = INITIAL_USER_GAME_BY_ID_STATE;

// TODO: Add types to refactor the reducer
export const userGameSlice = createSlice({
  name: 'userGame',
  initialState,
  reducers: {
    setUserGameReducer: (
      state,
      action: PayloadAction<{
        type: string;
        payload: string | number | boolean;
      }>
    ) => {
      const { type, payload } = action.payload;

      if (type === 'gameStatus') {
        if (payload === 'Inactive') {
          state.id = -1;
          state.gameStatus = null;
          state.gameNote = '';
          state.rating = null;
          state.private = false;
          state.completedDate = undefined;
          state.startDate = undefined;
        } else {
          state.gameStatus = payload as string;
        }
      } else if (type === 'gameNote') {
        state.gameNote = payload as string;
      } else if (type === 'rating') {
        state.rating = payload as number;
      } else if (type === 'private') {
        state.private = payload as boolean;
      } else if (type === 'completedDate') {
        state.completedDate = payload === '' ? undefined : (payload as string);
      } else if (type === 'startDate') {
        state.startDate = payload === '' ? undefined : (payload as string);
      }
    },
    setUserGame: (state, action: PayloadAction<UserGamesByGameID>) => {
      const { gameStatus, gameNote, rating, isPrivate, completedDate, startDate, id } = action.payload;

      if (gameStatus === 'Inactive') {
        state.id = -1;
        state.gameStatus = null;
        state.gameNote = '';
        state.rating = null;
        state.private = false;
        state.completedDate = undefined;
        state.startDate = undefined;
      } else {
        state.id = id;
        state.gameStatus = gameStatus;
        state.gameNote = gameNote;
        state.rating = rating;
        state.private = isPrivate;
        state.completedDate = completedDate === '' ? undefined : completedDate;
        state.startDate = startDate === '' ? undefined : startDate;
      }
    },
    userGameReset: (state) => {
      Object.assign(state, INITIAL_USER_GAME_BY_ID_STATE);
    },
  },
});

export const { setUserGameReducer, setUserGame, userGameReset } = userGameSlice.actions;

export default userGameSlice.reducer;
