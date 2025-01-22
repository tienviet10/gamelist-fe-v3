import { UserGameFilters } from '@app/constants/global/types';
import { createSlice, Draft, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';

export function createGameFiltersSlice<T, Reducers extends SliceCaseReducers<T>>({
  name,
  initialState,
  reducers,
}: {
  name: string;
  initialState: T;
  reducers: ValidateSliceCaseReducers<T, Reducers>;
}) {
  return createSlice({
    name,
    initialState,
    reducers: {
      setFilters: (state: Draft<T>, action: PayloadAction<Partial<T>>) => ({ ...state, ...action.payload }),

      resetFilter: (state: Draft<T>, action: PayloadAction<keyof T>) => {
        const filterKey = action.payload;

        return { ...state, [filterKey]: initialState[filterKey] };
      },

      reset: () => initialState,

      ...reducers,
    },
  });
}

const defaultUserGameFilters: UserGameFilters = {
  genres: undefined,
  platforms: undefined,
  tags: undefined,
  year: undefined,
  search: undefined,
  sortBy: undefined,
  selectedList: 'all',
};

export const userGameFiltersSlice = createGameFiltersSlice({
  name: 'userGameFiltersSlice',
  initialState: defaultUserGameFilters,
  reducers: {},
});

export const {
  setFilters: setUserGameFilters,
  resetFilter: resetUserGameFilter,
  reset: resetUserGameFilters,
} = userGameFiltersSlice.actions;

export default userGameFiltersSlice.reducer;
