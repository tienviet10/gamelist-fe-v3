import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type {
  CreateLikeResponse,
  CustomAxiosResponse,
  ErrorResponse,
  OldPostsAndStatusUpdatesDataType,
} from '@app/constants/global/types';
import { likeRoute } from '@app/constants/global/urls';

import { updatePostWithLike } from './helper';

type CreateLikeBody = {
  interactiveEntityId: number;
  page: number;
};

const useCreateLike = () => {
  const queryClient = useQueryClient();

  const createLike = useCallback(
    async (params: CreateLikeBody): Promise<CustomAxiosResponse<CreateLikeResponse>> => client.post(likeRoute, params),
    []
  );

  const {
    mutate: createLikeMutation,
    data: createLikeResponseData,
    error: createLikeError,
    isError: createLikeIsError,
  } = useMutation<CustomAxiosResponse<CreateLikeResponse>, ErrorResponse, CreateLikeBody>({
    mutationFn: createLike,
    onSuccess: (data, params) => {
      const { like } = data.data.data;

      // Update cache
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updatePostWithLike(oldData, like, params.interactiveEntityId, params.page, UPDATE_CACHE_TYPE.UPDATE)
      );
    },
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      createLikeMutation,
      createLikeResponseData,
      createLikeError,
      createLikeIsError,
    }),
    [createLikeMutation, createLikeResponseData, createLikeError, createLikeIsError]
  );

  return memoizedReturnedValues;
};

export default useCreateLike;
