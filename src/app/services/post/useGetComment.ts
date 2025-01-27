import { useCallback, useMemo } from 'react';

import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';

import type { CustomCommentsResponse, ErrorResponse } from '@app/constants/global/types';
import { getNextCommentsRoute } from '@app/constants/global/urls';

const useGetComment = ({
  startingId,
  interactiveEntityId,
  buttonActivate,
}: {
  startingId: number;
  interactiveEntityId: number;
  buttonActivate: boolean;
}) => {
  const getComments = useCallback(
    async (): Promise<CustomCommentsResponse> =>
      client.get(`${getNextCommentsRoute}?startingId=${startingId}&interactiveEntityId=${interactiveEntityId}`),
    [interactiveEntityId, startingId]
  );

  const {
    data: commentsData,
    isLoading: commentsDataIsLoading,
    refetch: refetchCommentData,
  } = useQuery<CustomCommentsResponse, ErrorResponse>({
    queryKey: ['comments'],
    queryFn: getComments,
    enabled: buttonActivate,
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      commentsData,
      commentsDataIsLoading,
      refetchCommentData,
    }),
    [commentsData, commentsDataIsLoading, refetchCommentData]
  );

  return memoizedReturnedValues;
};

export default useGetComment;
