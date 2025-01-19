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
