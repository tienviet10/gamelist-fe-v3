import { DEFAULT_SIZE_PER_PAGE } from '@app/constants/global/constants';
import useAllGames from '@app/services/game/useAllGames';

import GamesTrends from './GamesTrends';

function Trend() {
  // dispatch(setUserGameFilters({ sortBy: 'avg_score' }));

  const { data, isFetching: isBestFetching } = useAllGames(DEFAULT_SIZE_PER_PAGE, {
    sortBy: 'avg_score',
  });

  const bestGames = !isBestFetching && data?.pages[0]?.data?.data?.games;

  const { data: newestData, isFetching: isNewestFetching } = useAllGames(DEFAULT_SIZE_PER_PAGE, {
    sortBy: 'total_rating',
  });

  const newestGames = !isNewestFetching && newestData?.pages[0]?.data?.data?.games;

  return (
    <div>
      <div>
        {isBestFetching ? <div>Loading...</div> : <GamesTrends games={bestGames} title="Highest Rating" />}

        {isNewestFetching ? <div>Loading...</div> : <GamesTrends games={newestGames} title="Latest Played" />}
      </div>
    </div>
  );
}

export default Trend;
