// TODO: useInfiniteQuery is not working the same on this version of react-query

// import { useCallback } from 'react';

// import client from '@app/utils/authApi';
// import { useInfiniteQuery } from '@tanstack/react-query';

// import { ErrorResponse, PostsAndStatusUpdatesResponse } from '@app/constants/global/types';
// import { forumRoute, userSocialRoute } from '@app/constants/global/urls';

// const usePostsAndStatusUpdates = (type = '') => {
//   const limitParam = 20;

//   const getSocial = useCallback(
//     async ({ lastCursor = 0 }) => {
//       const getRequestUrl =
//         type === 'global'
//           ? `/${forumRoute}?limit=${limitParam}&startingId=${lastCursor}`
//           : `/${userSocialRoute}?limit=${limitParam}&startingId=${lastCursor}`;

//       const res = await client.get(getRequestUrl);

//       return res.data;
//     },
//     [type]
//   );

//   const {
//     data: postsAndStatusUpdates,
//     isLoading: postsAndStatusUpdatesIsLoading,
//     refetch: getPostsAndStatusUpdates,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery<PostsAndStatusUpdatesResponse, ErrorResponse>({
//     queryKey: ['postsAndStatusUpdates'],
//     queryFn: ({ pageParam = 0 }) => getSocial({ lastCursor: pageParam }),
//     getNextPageParam: (lastPage) => {
//       const postLength = lastPage?.data?.postsAndStatusUpdates?.posts.length;

//       const statusLength = lastPage?.data?.postsAndStatusUpdates?.statusUpdates.length;

//       if (postLength + statusLength < limitParam) {
//         return undefined;
//       }

//       return lastPage?.data?.postsAndStatusUpdates?.lastPostOrStatusUpdateId || undefined;
//     },
//   });

//   return {
//     postsAndStatusUpdates,
//     postsAndStatusUpdatesIsLoading,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     getPostsAndStatusUpdates,
//   };
// };

// export default usePostsAndStatusUpdates;
