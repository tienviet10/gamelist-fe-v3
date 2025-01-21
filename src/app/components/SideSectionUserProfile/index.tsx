import { useQueryClient } from '@tanstack/react-query';

import { CustomAxiosResponse, UserGamesByStatus, UserGamesType } from '@app/constants/global/types';

import ListCards from './ListCards';

import styles from './SideSection.module.scss';

function SideSection() {
  const queryClient = useQueryClient();
  const userGamesData: CustomAxiosResponse<UserGamesType> | undefined = queryClient.getQueryData(['userGames']);

  const gamesExtractor = (gamesObjData: UserGamesByStatus) => {
    const res: JSX.Element[] = [];

    gamesObjData?.listsOrder?.split(',').forEach((status: string) => {
      const gameData =
        gamesObjData[status as 'playing' | 'completed' | 'paused' | 'dropped' | 'planning' | 'justAdded'];

      if (gameData && gameData.length > 0) {
        res.push(<ListCards gameData={gameData} key={gameData[0].name} status={status} />);
      }
    });

    return res;
  };

  if (!userGamesData) return;

  const userGames = userGamesData?.data?.data?.userGamesByStatus;

  return <div className={styles.sideSectionContainer}>{userGames && gamesExtractor(userGames)}</div>;
}

export default SideSection;
