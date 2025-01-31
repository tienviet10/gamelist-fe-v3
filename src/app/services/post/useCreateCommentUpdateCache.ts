import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import {
  CreateCommentParams,
  CreateCommentResponse,
  CustomAxiosResponse,
  OldPostsAndStatusUpdatesDataType,
} from '@app/constants/global/types';

import { updateCommentInCache } from './helper';

const useCreateCommentUpdateCache = () => {
  const queryClient = useQueryClient();

  const processCreateCommentCache = useCallback(
    (data: CustomAxiosResponse<CreateCommentResponse>, val: CreateCommentParams) => {
      const { comment: newComment, interactiveEntityId } = data.data.data;

      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updateCommentInCache(oldData, newComment, interactiveEntityId, val.page, UPDATE_CACHE_TYPE.CREATE)
      );
    },
    [queryClient]
  );

  return { processCreateCommentCache };
};

export default useCreateCommentUpdateCache;
