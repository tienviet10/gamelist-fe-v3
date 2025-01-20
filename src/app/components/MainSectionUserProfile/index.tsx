import React from 'react';

import type { UserGamesByStatus } from '@app/constants/global/types';

import ListActivities from './ListActivities';
import ListStatistic from './ListStatistic';

function MainSection({ userGames }: { userGames: UserGamesByStatus | undefined }) {
  return (
    <div>
      <ListStatistic />
      <ListActivities />
    </div>
  );
}

export default MainSection;
