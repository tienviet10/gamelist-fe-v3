import { INITIAL_USER_GAME_LISTS } from '@app/constants/global/constants';
import type { ListsOrderType } from '@app/constants/global/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { InitialStateUserGamesListType } from './types';

const initialState: InitialStateUserGamesListType = INITIAL_USER_GAME_LISTS;

export const userGamesListSlice = createSlice({
  name: 'userGamesList',
  initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<ListsOrderType[]>) => {
      state.listOrder = action.payload;
      state.localListOrder = action.payload;
    },
    setListOrder: (state) => {
      state.listOrder = state.localListOrder;
    },
    setLocalListOrder: (state, action: PayloadAction<ListsOrderType[]>) => {
      state.localListOrder = action.payload;
    },
    resetLocalListOrder: (state) => {
      state.localListOrder = state.listOrder;
    },
  },
});

export const { setInitialState, setListOrder, setLocalListOrder, resetLocalListOrder } = userGamesListSlice.actions;

export default userGamesListSlice.reducer;
