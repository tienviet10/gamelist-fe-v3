import { InfiniteData } from '@tanstack/react-query';

import type { PostsDTOResponse, PostStatusResponseType, StatusUpdatesDTOResponse } from '@app/constants/global/types';

export type PostsAndStatusUpdatesType = InfiniteData<PostStatusResponseType['data']>;

const getSortedSocialData = (postsAndStatusUpdatesPages: PostsAndStatusUpdatesType) => {
  const socialData: {
    posts: PostsDTOResponse[];
    statusUpdates: StatusUpdatesDTOResponse[];
  } = (postsAndStatusUpdatesPages?.pages || []).reduce(
    (acc, curr) => {
      const { posts, statusUpdates } = curr.data.postsAndStatusUpdates;

      return {
        posts: [...acc.posts, ...posts],
        statusUpdates: [...acc.statusUpdates, ...statusUpdates],
      };
    },
    { posts: [], statusUpdates: [] } as {
      posts: PostsDTOResponse[];
      statusUpdates: StatusUpdatesDTOResponse[];
    }
  );

  const { posts, statusUpdates } = socialData;

  const socialDataSorted = [...posts, ...statusUpdates].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return socialDataSorted;
};

export default getSortedSocialData;
