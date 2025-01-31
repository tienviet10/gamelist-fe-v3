import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import { CreatePostResponse, CustomAxiosResponse, OldPostsAndStatusUpdatesDataType } from '@app/constants/global/types';

import { updatePostByPost } from './helper';

const useCreatePostUpdateCache = () => {
  const queryClient = useQueryClient();

  const processCreatePostCache = useCallback(
    (data: CustomAxiosResponse<CreatePostResponse>) => {
      const { post: newPost } = data.data.data;

      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updatePostByPost(oldData, newPost, UPDATE_CACHE_TYPE.CREATE)
      );
    },
    [queryClient]
  );

  return { processCreatePostCache };
};

export default useCreatePostUpdateCache;
