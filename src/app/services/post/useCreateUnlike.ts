import { useCallback, useMemo } from 'react';
import { AxiosResponse } from 'axios';

import client from '@app/utils/authApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type {
  CustomAxiosResponse,
  ErrorResponse,
  GeneralResponse,
  OldPostsAndStatusUpdatesDataType,
} from '@app/constants/global/types';
import { likeRoute } from '@app/constants/global/urls';

import { updatePostWithLike } from './helper';

type CreateUnlikeBody = {
  interactiveEntityId: number;
  userId?: number;
  page: number;
};

interface DeleteUnlikeResponse extends AxiosResponse {
  data: GeneralResponse;
}

const useCreateUnlike = () => {
  const queryClient = useQueryClient();

  const createUnlike = useCallback(
    async (params: CreateUnlikeBody): Promise<CustomAxiosResponse<DeleteUnlikeResponse>> =>
      client.delete(`${likeRoute}/${params.interactiveEntityId}`),
    []
  );

  const {
    mutate: createUnlikeMutation,
    data: createUnlikeResponseData,
    error: createUnlikeError,
    isError: createUnlikeIsError,
  } = useMutation<CustomAxiosResponse<DeleteUnlikeResponse>, ErrorResponse, CreateUnlikeBody>({
    mutationFn: createUnlike,
    onSuccess: (_, params) => {
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updatePostWithLike(
          oldData,
          params.userId || 0,
          params.interactiveEntityId,
          params.page,
          UPDATE_CACHE_TYPE.DELETE
        )
      );
    },
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      createUnlikeMutation,
      createUnlikeResponseData,
      createUnlikeError,
      createUnlikeIsError,
    }),
    [createUnlikeMutation, createUnlikeResponseData, createUnlikeError, createUnlikeIsError]
  );

  return memoizedReturnedValues;
};

export default useCreateUnlike;
