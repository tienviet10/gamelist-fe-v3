import { useCallback, useMemo } from 'react';
import { ErrorResponse } from 'react-router-dom';

import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';

import { CustomAGameResponse } from '@app/constants/global/types';
import { gamesRoute } from '@app/constants/global/urls';

const useGetAGame = ({ gameId }: { gameId: string | undefined }) => {
  const getAComment = useCallback(
    async (): Promise<CustomAGameResponse> => client.get(`${gamesRoute}/${gameId}`),
    [gameId]
  );

  const {
    data: aCommentData,
    isLoading: aCommentDataIsLoading,
    refetch: refetchCommentData,
  } = useQuery<CustomAGameResponse, ErrorResponse>({
    queryKey: ['game', gameId],
    queryFn: getAComment,
    enabled: !!gameId,
  });

  const memoizedReturnedValues = useMemo(
    () => ({
      aCommentData,
      aCommentDataIsLoading,
      refetchCommentData,
    }),
    [aCommentData, aCommentDataIsLoading, refetchCommentData]
  );

  return memoizedReturnedValues;
};

export default useGetAGame;
