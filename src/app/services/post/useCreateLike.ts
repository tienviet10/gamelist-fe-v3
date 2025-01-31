import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type {
  CreateLikeBody,
  CreateLikeResponse,
  CustomAxiosResponse,
  ErrorResponse,
} from '@app/constants/global/types';
import { likeRoute } from '@app/constants/global/urls';

const useCreateLike = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: CustomAxiosResponse<CreateLikeResponse>, params: CreateLikeBody) => void;
  onError?: (error: ErrorResponse) => void;
}) => {
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
    onSuccess,
    onError,
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
