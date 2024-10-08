// TODO: should not use useAppSelector or any sideEffect in this hook. Those value can be pass in as props. Make this hook general for just calling the endpoint

// import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult, useInfiniteQuery } from '@tanstack/react-query';

// import { CustomAxiosResponse, ErrorResponse, Game, GameFiltersSortType } from '@app/constants/global/types';

// type GamesResponse = {
//   games: Game[];
// };

// type GamesResponseWithLastEntry = CustomAxiosResponse<GamesResponse> & {
//   lastEntry: Game | undefined;
// };

// type BaseGetGamesHook =
//   | {
//       status: 'loading';
//       error: null;
//       data: null;
//     }
//   | {
//       status: 'success';
//       error: null;
//       data: InfiniteData<GamesResponseWithLastEntry>;
//       fetchNextPage: (
//         options?: FetchNextPageOptions | undefined
//       ) => Promise<InfiniteQueryObserverResult<GamesResponseWithLastEntry, ErrorResponse>>;
//     }
//   | {
//       status: 'error';
//       error: ErrorResponse;
//       data: null;
//     };

// type GetGamesHookResult = BaseGetGamesHook & {
//   hasNextPage: boolean | undefined;
//   isFetching: boolean;
//   isFetchingNextPage: boolean;
// };

// function lastElement(arr: Game[]) {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) return undefined;

//   return arr[arr.length - 1];
// }

// export default function useAllGames(limitParam = 20, sortBy?: GameFiltersSortType): GetGamesHookResult {
//   const {
//     genres,
//     tags,
//     platforms,
//     search,
//     sortBy: sortByFromStore,
//     year,
//   } = useAppSelector((state) => state.homeGameFilters);

//   // Get sortBy value from params if it exists, otherwise get it from the store
//   const sortByValue = sortBy || sortByFromStore;

//   const queryKey = [
//     'Games',
//     genres.included,
//     tags.included,
//     platforms.included,
//     year,
//     search,
//     genres.excluded,
//     tags.excluded,
//     sortByValue,
//     platforms.excluded,
//     limitParam,
//   ];

//   const { data, status, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery<
//     GamesResponseWithLastEntry,
//     ErrorResponse
//   >({
//     queryKey,

//     // Since we aren't using offset based pagination, there isn't any way to tell if were on the last page or not. Thus we have to fetch one more time and
//     // see if the result we get back doesn't contain any games. If it doesn't, we know thats the end.
//     // One way to check if were at the end of the list is to check if the newly returned page of pages is equal to the fetch amount, if it's not,
//     // then were at the end of the list. The problem with this approach is that we can't change the fetch limit once it's set. Otherwise we might
//     // think that were at the end of the list when were not.
//     // TODO: --- We would need to store the last fetch limit as well
//     getNextPageParam: (lastPage) => {
//       if (lastPage && lastPage.data.data.games.length === 0) {
//         return undefined;
//       }

//       const { lastEntry } = lastPage;

//       return lastEntry || undefined;
//     },

//     // pageParam is null for the first fetch (initial load), and will eventually be undefined when it has to fetch the next page.
//     queryFn: async ({ pageParam }) => {
//       const result = await client.post('/game-service/games', {
//         genres: genres.included,
//         tags: tags.included,
//         platforms: platforms.included,
//         year,
//         excludedGenres: genres.excluded,
//         excludedTags: tags.excluded,
//         excludedPlatforms: platforms.excluded,
//         sortBy: sortByValue,
//         search,
//         limit: limitParam,
//         gameQueryPaginationOptions: !pageParam
//           ? undefined
//           : {
//               lastId: pageParam.id,
//               lastName: pageParam.name,
//               lastReleaseDateEpoch: new Date(pageParam.releaseDate).getTime() / 1000,
//               lastAverageScore: pageParam.avgScore,
//               lastTotalRating: pageParam.totalRating,
//             },
//       });

//       // TODO: Track fetch amount?
//       return {
//         ...result,
//         lastEntry: lastElement(result.data.data.games),
//       };
//     },
//     refetchOnReconnect: false,
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//   });

//   if (status === 'loading') {
//     return {
//       status: 'loading',
//       error: null,
//       data: null,
//       hasNextPage,
//       isFetching,
//       isFetchingNextPage,
//     };
//   }

//   if (status === 'error') {
//     return {
//       status: 'error',
//       error,
//       data: null,
//       hasNextPage,
//       isFetching,
//       isFetchingNextPage,
//     };
//   }

//   return {
//     status: 'success',
//     error: null,
//     data,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     fetchNextPage,
//   };
// }
