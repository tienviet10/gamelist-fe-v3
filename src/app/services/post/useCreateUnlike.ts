import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type {
  CreateUnlikeBody,
  CustomAxiosResponse,
  DeleteUnlikeResponse,
  ErrorResponse,
} from '@app/constants/global/types';
import { likeRoute } from '@app/constants/global/urls';

const useCreateUnlike = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: CustomAxiosResponse<DeleteUnlikeResponse>, params: CreateUnlikeBody) => void;
  onError?: (error: ErrorResponse) => void;
}) => {
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
    onSuccess,
    onError,
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
