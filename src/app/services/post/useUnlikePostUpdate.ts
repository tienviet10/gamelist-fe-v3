import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import {
  CreateUnlikeBody,
  CustomAxiosResponse,
  DeleteUnlikeResponse,
  OldPostsAndStatusUpdatesDataType,
} from '@app/constants/global/types';

import { updatePostWithLike } from './helper';

const useUnlikePostUpdate = () => {
  const queryClient = useQueryClient();

  const processUnlikeCacheInPost = useCallback(
    (_: CustomAxiosResponse<DeleteUnlikeResponse>, params: CreateUnlikeBody) => {
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updatePostWithLike(
          oldData,
          params.userId || 0,
          params.interactiveEntityId,
          params?.page || null,
          UPDATE_CACHE_TYPE.DELETE
        )
      );
    },
    [queryClient]
  );

  return { processUnlikeCacheInPost };
};

export default useUnlikePostUpdate;
