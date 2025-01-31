import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import { DeleteCommentResponse, DeleteParams, OldPostsAndStatusUpdatesDataType } from '@app/constants/global/types';

import { updateCommentInCache } from './helper';

const useDeleteCommentUpdateCache = () => {
  const queryClient = useQueryClient();

  const processDeleteCommentCache = useCallback(
    (_: DeleteCommentResponse, val: DeleteParams) => {
      const { commentId, interactiveEntityId } = val;

      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updateCommentInCache(oldData, commentId, interactiveEntityId, val.page, UPDATE_CACHE_TYPE.DELETE)
      );
    },
    [queryClient]
  );

  return { processDeleteCommentCache };
};

export default useDeleteCommentUpdateCache;
