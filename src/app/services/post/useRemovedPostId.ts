import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useMutation } from '@tanstack/react-query';

import type { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { postingRoute } from '@app/constants/global/urls';

const useRemovedPostId = () => {
  const removePostById = useCallback(
    async (postId: number): Promise<CustomAxiosResponse<unknown>> => client.delete(`/${postingRoute}/${postId}`),
    []
  );

  const {
    mutate: removePostByIdMutation,
    data: removePostByIdResponseData,
    error: removePostByIdError,
    isError: removePostByIdIsError,
  } = useMutation<CustomAxiosResponse<unknown>, ErrorResponse, number>({
    mutationFn: removePostById,
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      removePostByIdMutation,
      removePostByIdResponseData,
      removePostByIdError,
      removePostByIdIsError,
    }),
    [removePostByIdError, removePostByIdIsError, removePostByIdMutation, removePostByIdResponseData]
  );

  return memoizedReturnedValues;
};

export default useRemovedPostId;
