import client from '@app/utils/authApi';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { CustomAxiosResponse, ErrorResponse, Game, GameFiltersSortType, Games } from '@app/constants/global/types';
import { REACT_QUERY_STATUS } from '@app/constants/global/urls';

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

const {
  genres,
  tags,
  platforms,
  search,
  sortBy: sortByFromStore,
  year,
} = {
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

function lastElement(arr: Game[]) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return undefined;

  return arr[arr.length - 1];
}

export default function useAllGames(limitParam = 20, sortBy?: GameFiltersSortType): BaseGetGamesHook {
  // const {
  //   genres,
  //   tags,
  //   platforms,
  //   search,
  //   sortBy: sortByFromStore,
  //   year,
  // } = useAppSelector((state) => state.homeGameFilters);

  // Get sortBy value from params if it exists, otherwise get it from the store
  const sortByValue = sortBy || sortByFromStore;

  const queryKey = [
    'Games',
    genres.included,
    tags.included,
    platforms.included,
    year,
    search,
    genres.excluded,
    tags.excluded,
    sortByValue,
    platforms.excluded,
    limitParam,
  ];

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
        genres: genres.included,
        tags: tags.included,
        platforms: platforms.included,
        year: undefined,
        excludedGenres: genres.excluded,
        excludedTags: tags.excluded,
        excludedPlatforms: platforms.excluded,
        sortBy: sortByValue,
        search,
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

  return {
    status,
    error,
    data,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  };
}
