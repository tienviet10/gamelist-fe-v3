import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import { CustomAxiosResponse, ErrorResponse, PostsDTOResponse } from '@app/constants/global/types';
import { postingRoute } from '@app/constants/global/urls';

type CreatePostParams = {
  text: string;
};

type CreatePostResponse = {
  post: PostsDTOResponse;
};

const useCreatePost = ({
  onSuccessCallback,
  onErrorCallback,
}: {
  onSuccessCallback?: (data: CustomAxiosResponse<CreatePostResponse>) => void;
  onErrorCallback?: (error: ErrorResponse) => void;
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
    onSuccess: (data) => {
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
    onError: (error) => {
      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },
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
