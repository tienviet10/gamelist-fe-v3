import type { RequiredGameWithIsAdded } from '@app/constants/global/types';

export type GameDataType = RequiredGameWithIsAdded & {
  key?: React.Key;
};

export type UserGameListDataType = {
  data: GameDataType[];
};
