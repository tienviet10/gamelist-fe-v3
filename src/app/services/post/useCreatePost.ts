import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type {
  CreatePostParams,
  CreatePostResponse,
  CustomAxiosResponse,
  ErrorResponse,
} from '@app/constants/global/types';
import { postingRoute } from '@app/constants/global/urls';

const useCreatePost = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: CustomAxiosResponse<CreatePostResponse>, params: CreatePostParams) => void;
  onError?: (error: ErrorResponse) => void;
}) => {
  const createPost = useCallback(
    async (params: CreatePostParams): Promise<CustomAxiosResponse<CreatePostResponse>> =>
      client.post(postingRoute, params),
    []
  );

  const {
    mutate: createPostMutation,
    data: createPostResponseData,
    error: createPostError,
    isError: createPostIsError,
  } = useMutation<CustomAxiosResponse<CreatePostResponse>, ErrorResponse, CreatePostParams>({
    mutationFn: createPost,
    onSuccess,
    onError,
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      createPostMutation,
      createPostResponseData,
      createPostError,
      createPostIsError,
    }),
    [createPostMutation, createPostResponseData, createPostError, createPostIsError]
  );

  return memoizedReturnedValues;
};

export default useCreatePost;
