// export type InitialStateType = {
//   loading: boolean;
//   user: UserInfo;
// };

import type { ListsOrderType } from '@app/constants/global/types';

// type UserInfo = {
//   id: string;
//   username: string;
//   bannerPicture: string;
//   createdAt: string;
//   games: string[];
//   isActive: boolean;
//   userGames: string[];
//   userPicture: string;
//   __typename: string;
// };

export type InitialStateUserGamesListType = {
  listOrder: ListsOrderType[];
  localListOrder: ListsOrderType[];
};

export type InitialStateUserGameType = {
  completedDate: string | undefined;
  gameNote: string;
  gameStatus: string | null;
  startDate: string | undefined;
  private: boolean;
  rating: number | null;
  id: number;
};

export type HomeSearchSlice = {
  view: 'grid' | 'list';
};
