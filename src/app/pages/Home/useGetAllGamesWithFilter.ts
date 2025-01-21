import { useCallback, useMemo } from 'react';

import { DEFAULT_SIZE_PER_PAGE, DEFAULT_SORT_VALUES } from '@app/constants/global/constants';
import useAllGames from '@app/services/game/useAllGames';

// TODO: This is just a placeholder. Import the sortVal from redux

const useGetAllGamesWithFilter = () => {
  const { data, fetchNextPage } = useAllGames(DEFAULT_SIZE_PER_PAGE, DEFAULT_SORT_VALUES);

  const fetchNext = useCallback(() => {
    if (!fetchNextPage) return;

    fetchNextPage();
  }, [fetchNextPage]);

  const returnedData = useMemo(
    () => ({
      data,
      fetchNextPage,
      fetchNext,
    }),
    [data, fetchNext, fetchNextPage]
  );

  return returnedData;
};

export default useGetAllGamesWithFilter;
