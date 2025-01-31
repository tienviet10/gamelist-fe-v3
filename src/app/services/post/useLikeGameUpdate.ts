import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import {
  CreateLikeBody,
  CreateLikeResponse,
  CustomAGameResponse,
  CustomAxiosResponse,
} from '@app/constants/global/types';

import { updateLikeInGameCache } from './helper';

const useLikeGameUpdate = () => {
  const queryClient = useQueryClient();

  const processLikeCacheInGame = useCallback(
    (_: CustomAxiosResponse<CreateLikeResponse>, params: CreateLikeBody) => {
      queryClient.cancelQueries({ queryKey: ['game', params.interactiveEntityId.toString()] });
      queryClient.setQueryData(
        ['game', params.interactiveEntityId.toString()],
        (oldData: CustomAGameResponse | undefined) => updateLikeInGameCache(oldData, true, UPDATE_CACHE_TYPE.UPDATE)
      );
    },
    [queryClient]
  );

  return { processLikeCacheInGame };
};

export default useLikeGameUpdate;
