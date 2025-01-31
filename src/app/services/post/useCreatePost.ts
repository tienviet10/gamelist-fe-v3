import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type {
  CustomAxiosResponse,
  ErrorResponse,
  OldPostsAndStatusUpdatesDataType,
  PostsDTOResponse,
} from '@app/constants/global/types';
import { postingRoute } from '@app/constants/global/urls';

import { updatePostByPost } from './helper';

type CreatePostParams = {
  text: string;
};

type CreatePostResponse = {
  post: PostsDTOResponse;
};

const useCreatePost = () => {
  const queryClient = useQueryClient();

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
      const { post: newPost } = data.data.data;

      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updatePostByPost(oldData, newPost, UPDATE_CACHE_TYPE.CREATE)
      );
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
