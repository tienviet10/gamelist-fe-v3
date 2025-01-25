import type { HomeGameFilters, ListsOrderType } from './types';

export const REACT_QUERY_STATUS = Object.freeze({
  PENDING: 'pending',
  ERROR: 'error',
  SUCCESS: 'success',
});

export const DEFAULT_SIZE_PER_PAGE = 20;

export const INITIAL_USER_STATE = {
  loading: true,
  user: {
    username: '',
    bannerPicture: '',
    userPicture: '',
    email: '',
  },
};

export const DEFAULT_SORT_VALUES: HomeGameFilters = {
  genres: {
    included: [],
    excluded: [],
  },
  tags: {
    included: [],
    excluded: [],
  },
  platforms: {
    included: [],
    excluded: [],
  },
  search: '',
  sortBy: 'name',
  year: undefined,
};

export const INITIAL_USER_GAME_BY_ID_STATE = {
  completedDate: undefined,
  gameNote: '',
  gameStatus: '',
  private: false,
  rating: null,
  startDate: undefined,
  id: -1,
};

export const INITIAL_USER_GAME_LISTS = {
  listOrder: ['planning', 'playing', 'paused', 'completed', 'dropped', 'justAdded'] as ListsOrderType[],
  localListOrder: ['planning', 'playing', 'paused', 'completed', 'dropped', 'justAdded'] as ListsOrderType[],
};

export const UPDATE_CACHE_TYPE = {
  CREATE: 'create',
  DELETE: 'delete',
  UPDATE: 'update',
};
