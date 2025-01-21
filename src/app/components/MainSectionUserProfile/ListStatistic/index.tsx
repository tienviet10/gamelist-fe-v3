import React from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { CustomAxiosResponse, UserGamesByStatus, UserGamesType } from '@app/constants/global/types';

function ListStatistic() {
  const queryClient = useQueryClient();
  const userGamesData: CustomAxiosResponse<UserGamesType> | undefined = queryClient.getQueryData(['userGames']);

  const gameStatusExtractor = (gamesObjData: UserGamesByStatus) => {
    const result: JSX.Element[] = [];

    Object.keys(gamesObjData).forEach((key) => {
      if (key.includes('Count')) {
        result.push(
          <div key={key}>
            <div>{key === 'justAddedCount' ? 'JUST ADDED' : key.replace('Count', '').toUpperCase()}</div>
            <div>
              {gamesObjData[
                key as
                  | 'playingCount'
                  | 'completedCount'
                  | 'pausedCount'
                  | 'droppedCount'
                  | 'planningCount'
                  | 'justAddedCount'
              ] || undefined}
            </div>
          </div>
        );
      }
    });

    return result;
  };

  if (!userGamesData) return;

  return (
    <div style={{ display: 'flex' }}>{gameStatusExtractor(userGamesData.data?.data?.userGamesByStatus || {})}</div>
  );
}

export default ListStatistic;
