import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type { DeleteCommentResponse, DeleteParams, ErrorResponse } from '@app/constants/global/types';
import { commentRoute } from '@app/constants/global/urls';

const useDeleteComment = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: DeleteCommentResponse, params: DeleteParams) => void;
  onError?: (error: ErrorResponse) => void;
}) => {
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
    onSuccess,
    onError,
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
