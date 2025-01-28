import { InfiniteData } from '@tanstack/react-query';

import type {
  PostsDTOResponseWithPage,
  PostStatusResponseType,
  StatusUpdatesDTOResponseWithPage,
} from '@app/constants/global/types';

export type PostsAndStatusUpdatesType = InfiniteData<PostStatusResponseType['data']>;

const getSortedSocialData = (postsAndStatusUpdatesPages: PostsAndStatusUpdatesType) => {
  const socialData: {
    posts: PostsDTOResponseWithPage[];
    statusUpdates: StatusUpdatesDTOResponseWithPage[];
  } = (postsAndStatusUpdatesPages?.pages || []).reduce(
    (acc, curr, idx) => {
      const { posts, statusUpdates } = curr.data.postsAndStatusUpdates;

      return {
        posts: [...acc.posts, ...posts.map((item) => ({ ...item, page: idx }))],
        statusUpdates: [...acc.statusUpdates, ...statusUpdates.map((item) => ({ ...item, page: idx }))],
      };
    },
    { posts: [], statusUpdates: [] } as {
      posts: PostsDTOResponseWithPage[];
      statusUpdates: StatusUpdatesDTOResponseWithPage[];
    }
  );

  const { posts, statusUpdates } = socialData;

  const socialDataSorted = [...posts, ...statusUpdates].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return socialDataSorted;
};

export default getSortedSocialData;
