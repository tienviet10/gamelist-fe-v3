import { INITIAL_USER_STATE } from '@app/constants/global/constants';
import type { InitialStateType, UserData } from '@app/constants/global/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = INITIAL_USER_STATE;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
