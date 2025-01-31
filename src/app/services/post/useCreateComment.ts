import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type {
  CreateCommentParams,
  CreateCommentResponse,
  CustomAxiosResponse,
  ErrorResponse,
} from '@app/constants/global/types';
import { commentRoute } from '@app/constants/global/urls';

const useCreateComment = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: CustomAxiosResponse<CreateCommentResponse>, params: CreateCommentParams) => void;
  onError?: (error: ErrorResponse) => void;
}) => {
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
    onSuccess,
    onError,
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
