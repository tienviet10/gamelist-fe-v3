import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type {
  CreateCommentResponse,
  CustomAxiosResponse,
  ErrorResponse,
  OldPostsAndStatusUpdatesDataType,
} from '@app/constants/global/types';
import { commentRoute } from '@app/constants/global/urls';

import { updateCommentInCache } from './helper';

type CreateCommentParams = {
  text: string;
  interactiveEntityId: string;
};

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const createComment = useCallback(
    async (params: CreateCommentParams): Promise<CustomAxiosResponse<CreateCommentResponse>> =>
      client.post(commentRoute, params),
    []
  );

  const {
    mutate: createCommentMutation,
    data: createCommentResponseData,
    error: createCommentError,
    isError: createCommentIsError,
  } = useMutation<CustomAxiosResponse<CreateCommentResponse>, ErrorResponse, CreateCommentParams>({
    mutationFn: createComment,
    onSuccess: (data) => {
      const { comment: newComment, interactiveEntityId } = data.data.data;

      // Update cache
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updateCommentInCache(oldData, newComment, interactiveEntityId, UPDATE_CACHE_TYPE.CREATE)
      );
    },
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      createCommentMutation,
      createCommentResponseData,
      createCommentError,
      createCommentIsError,
    }),
    [createCommentMutation, createCommentResponseData, createCommentError, createCommentIsError]
  );

  return memoizedReturnedValues;
};

export default useCreateComment;
