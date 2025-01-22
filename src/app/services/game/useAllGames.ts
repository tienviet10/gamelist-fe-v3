import { useMemo } from 'react';

import client from '@app/utils/authApi';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { DEFAULT_SORT_VALUES, REACT_QUERY_STATUS } from '@app/constants/global/constants';
import type {
  CustomAxiosResponse,
  ErrorResponse,
  Game,
  Games,
  OptionalHomeGameFilters,
} from '@app/constants/global/types';

type CustomGamesResponse = CustomAxiosResponse<Games>;

type Keys = keyof typeof REACT_QUERY_STATUS;
type BaseGetGamesHook = {
  status: (typeof REACT_QUERY_STATUS)[Keys];
  error: null | ErrorResponse;
  data: undefined | InfiniteData<CustomGamesResponse>;
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<CustomGamesResponse>, ErrorResponse>>;
  hasNextPage?: boolean;
  isFetching?: boolean;
  isFetchingNextPage?: boolean;
};

function lastElement(arr: Game[]) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return undefined;

  return arr[arr.length - 1];
}

export default function useAllGames(limitParam = 20, sortVal?: OptionalHomeGameFilters): BaseGetGamesHook {
  const queryKey = useMemo(
    () => [
      'Games',
      sortVal?.genres?.included || DEFAULT_SORT_VALUES.genres.included,
      sortVal?.tags?.included || DEFAULT_SORT_VALUES.tags.included,
      sortVal?.platforms?.included || DEFAULT_SORT_VALUES.platforms.included,
      sortVal?.year || DEFAULT_SORT_VALUES.year,
      sortVal?.search || DEFAULT_SORT_VALUES.search,
      sortVal?.genres?.excluded || DEFAULT_SORT_VALUES.genres.excluded,
      sortVal?.tags?.excluded || DEFAULT_SORT_VALUES.tags.excluded,
      sortVal?.sortBy || DEFAULT_SORT_VALUES.sortBy,
      sortVal?.platforms?.excluded || DEFAULT_SORT_VALUES.platforms.excluded,
      limitParam,
    ],
    [
      limitParam,
      sortVal?.genres?.excluded,
      sortVal?.genres?.included,
      sortVal?.platforms?.excluded,
      sortVal?.platforms?.included,
      sortVal?.search,
      sortVal?.sortBy,
      sortVal?.tags?.excluded,
      sortVal?.tags?.included,
      sortVal?.year,
    ]
  );

  const { data, status, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery<
    CustomGamesResponse,
    ErrorResponse,
    InfiniteData<CustomGamesResponse>,
    typeof queryKey,
    Game | null
  >({
    queryKey,
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.data.data.games.length === 0) {
        return undefined;
      }

      return lastElement(lastPage.data.data.games) || undefined;
    },
    initialPageParam: null,
    queryFn: async ({ pageParam }) => {
      const res = await client.post('/game-service/games', {
        genres: sortVal?.genres?.included || DEFAULT_SORT_VALUES.genres.included,
        tags: sortVal?.tags?.included || DEFAULT_SORT_VALUES.tags.included,
        platforms: sortVal?.platforms?.included || DEFAULT_SORT_VALUES.platforms.included,
        year: sortVal?.year || DEFAULT_SORT_VALUES.year,
        excludedGenres: sortVal?.genres?.excluded || DEFAULT_SORT_VALUES.platforms.excluded,
        excludedTags: sortVal?.tags?.excluded || DEFAULT_SORT_VALUES.tags.excluded,
        excludedPlatforms: sortVal?.platforms?.excluded || DEFAULT_SORT_VALUES.platforms.excluded,
        sortBy: sortVal?.sortBy || DEFAULT_SORT_VALUES.sortBy,
        search: sortVal?.search || DEFAULT_SORT_VALUES.search,
        limit: limitParam,
        gameQueryPaginationOptions: !pageParam
          ? undefined
          : {
              lastId: pageParam.id,
              lastName: pageParam.name,
              lastReleaseDateEpoch: new Date(pageParam.releaseDate).getTime() / 1000,
              lastAverageScore: pageParam.avgScore,
              lastTotalRating: pageParam.totalRating,
            },
      });

      return res;
    },
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const exportValues = useMemo(
    () => ({
      status,
      error,
      data,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
    }),
    [status, error, data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]
  );

  return exportValues;
}
