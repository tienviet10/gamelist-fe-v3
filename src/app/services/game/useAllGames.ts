// TODO: should not use useAppSelector or any sideEffect in this hook. Those value can be pass in as props. Make this hook general for just calling the endpoint

import client from '@app/utils/authApi';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { CustomAxiosResponse, ErrorResponse, Game, GameFiltersSortType } from '@app/constants/global/types';

type GamesResponse = {
  games: Game[];
};

type GamesResponseWithLastEntry = CustomAxiosResponse<GamesResponse> & {
  lastEntry: Game | undefined;
};

type BaseGetGamesHook =
  | {
      status: 'loading';
      error: null;
      data: null;
    }
  | {
      status: 'success';
      error: null;
      data: InfiniteData<GamesResponseWithLastEntry>;
      fetchNextPage: (
        options?: FetchNextPageOptions | undefined
      ) => Promise<InfiniteQueryObserverResult<GamesResponseWithLastEntry, ErrorResponse>>;
    }
  | {
      status: 'error';
      error: ErrorResponse;
      data: null;
    };

type GetGamesHookResult = BaseGetGamesHook & {
  hasNextPage: boolean | undefined;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<GamesResponseWithLastEntry, ErrorResponse>>;
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

export default function useAllGames(limitParam = 20, sortBy?: GameFiltersSortType): GetGamesHookResult {
  // const {
  //   genres,
  //   tags,
  //   platforms,
  //   search,
  //   sortBy: sortByFromStore,
  //   year,
  // } = useAppSelector((state) => state.homeGameFilters);

  // // Get sortBy value from params if it exists, otherwise get it from the store
  const sortByValue = sortBy || sortByFromStore;

  // const queryKey = ['Games', [], [], [], undefined, undefined, [], [], undefined, [], 20];

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
    GamesResponseWithLastEntry,
    ErrorResponse
  >({
    queryKey,
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.data.data.games.length === 0) {
        return undefined;
      }

      return lastElement(lastPage.data.data.games) || undefined;
    },
    queryFn: async ({ pageParam }: { pageParam: Game | undefined }) => {
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

  // const { data, status, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
  //   queryKey,
  //   queryFn: ({ pageParam }) => fetchPage(pageParam),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => lastPage.nextCursor,
  //   getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => firstPage.prevCursor,
  // });

  // if (status === 'loading') {
  //   return {
  //     status: 'loading',
  //     error: null,
  //     data: null,
  //     hasNextPage,
  //     isFetching,
  //     isFetchingNextPage,
  //   };
  // }

  if (status === 'error') {
    return {
      status: 'error',
      error,
      data: null,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
    };
  }

  return {
    status: 'success',
    error: null,
    data,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  };
}
