import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import {
  CreateLikeBody,
  CreateLikeResponse,
  CustomAxiosResponse,
  OldPostsAndStatusUpdatesDataType,
} from '@app/constants/global/types';

import { updatePostWithLike } from './helper';

const useLikePostUpdate = () => {
  const queryClient = useQueryClient();

  const processLikeCacheInPost = useCallback(
    (data: CustomAxiosResponse<CreateLikeResponse>, params: CreateLikeBody) => {
      const { like } = data.data.data;

      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updatePostWithLike(oldData, like, params.interactiveEntityId, params.page || null, UPDATE_CACHE_TYPE.UPDATE)
      );
    },
    [queryClient]
  );

  return { processLikeCacheInPost };
};

export default useLikePostUpdate;
