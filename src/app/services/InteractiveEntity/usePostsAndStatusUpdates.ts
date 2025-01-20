// TODO: useInfiniteQuery is not working the same on this version of react-query

import client from '@app/utils/authApi';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import type { ErrorResponse, PostStatusResponseType } from '@app/constants/global/types';
import { forumRoute, userSocialRoute } from '@app/constants/global/urls';

const usePostsAndStatusUpdates = (type = '') => {
  const limitParam = 20;

  const {
    data: postsAndStatusUpdates,
    isLoading: postsAndStatusUpdatesIsLoading,
    refetch: getPostsAndStatusUpdates,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<
    PostStatusResponseType['data'],
    ErrorResponse,
    InfiniteData<PostStatusResponseType['data']>,
    string[],
    number
  >({
    queryKey: ['postsAndStatusUpdates'],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }: { pageParam: number }) => {
      const getRequestUrl =
        type === 'global'
          ? `/${forumRoute}?limit=${limitParam}&startingId=${pageParam}`
          : `/${userSocialRoute}?limit=${limitParam}&startingId=${pageParam}`;

      const res: PostStatusResponseType = await client.get(getRequestUrl);

      return res.data;
    },
    getNextPageParam: (lastPage) => {
      const postLength = lastPage?.data?.postsAndStatusUpdates?.posts?.length;
      const statusLength = lastPage?.data?.postsAndStatusUpdates?.statusUpdates?.length;

      if (postLength + statusLength < limitParam) {
        return 0;
      }

      return lastPage?.data?.postsAndStatusUpdates?.lastPostOrStatusUpdateId || 0;
    },
  });

  return {
    postsAndStatusUpdates,
    postsAndStatusUpdatesIsLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    getPostsAndStatusUpdates,
  };
};

export default usePostsAndStatusUpdates;
