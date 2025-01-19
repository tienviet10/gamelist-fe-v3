import { useCallback, useMemo } from 'react';

import { DEFAULT_SIZE_PER_PAGE } from '@app/constants/global/constants';
import type { HomeGameFilters } from '@app/constants/global/types';
import useAllGames from '@app/services/game/useAllGames';

// TODO: This is just a placeholder. Import the sortVal from redux
const sortVal: HomeGameFilters = {
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

const useGetAllGamesWithFilter = () => {
  const { data, fetchNextPage } = useAllGames(DEFAULT_SIZE_PER_PAGE, sortVal);

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
