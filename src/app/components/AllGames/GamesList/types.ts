import { Game } from '@app/constants/global/types';

export type GameCardType = {
  game: Game;
  colorBgContainer: string;
  userGameLoading?: boolean;
  openGameListEditor?: (game: Game) => void;
};
