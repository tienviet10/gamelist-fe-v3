import { useCallback, useMemo } from 'react';
import { AxiosResponse } from 'axios';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type { ErrorResponse, GeneralResponse, OldPostsAndStatusUpdatesDataType } from '@app/constants/global/types';
import { commentRoute } from '@app/constants/global/urls';

import { updateCommentInCache } from './helper';

interface DeleteCommentResponse extends AxiosResponse {
  data: GeneralResponse;
}

type DeleteParams = {
  commentId: number;
  interactiveEntityId: number;
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const deleteComment = useCallback(
    async (params: DeleteParams): Promise<DeleteCommentResponse> =>
      client.delete(`${commentRoute}/${params.commentId}`),
    []
  );

  const {
    mutate: deleteCommentMutation,
    data: deleteCommentResponseData,
    error: deleteCommentError,
    isError: deleteCommentIsError,
  } = useMutation<DeleteCommentResponse, ErrorResponse, DeleteParams>({
    mutationFn: deleteComment,
    onSuccess: (_, val) => {
      const { commentId, interactiveEntityId } = val;

      // Update cache
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updateCommentInCache(oldData, commentId, interactiveEntityId, UPDATE_CACHE_TYPE.DELETE)
      );
    },
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      deleteCommentMutation,
      deleteCommentResponseData,
      deleteCommentError,
      deleteCommentIsError,
    }),
    [deleteCommentMutation, deleteCommentResponseData, deleteCommentError, deleteCommentIsError]
  );

  return memoizedReturnedValues;
};

export default useDeleteComment;
