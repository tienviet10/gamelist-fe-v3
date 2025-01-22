import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userGameFiltersSlice from './gameFiltersSlice';
import homeSearchSlice from './homeSearchSlice';
import userGameSlice from './userGameSlice';
import userGamesListSlice from './userGamesListSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  userGameFilters: userGameFiltersSlice,
  userGame: userGameSlice,
  userGames: userGamesListSlice,
  homeSearch: homeSearchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
