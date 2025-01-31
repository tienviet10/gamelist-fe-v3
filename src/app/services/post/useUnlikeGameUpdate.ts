import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import {
  CreateUnlikeBody,
  CustomAGameResponse,
  CustomAxiosResponse,
  DeleteUnlikeResponse,
} from '@app/constants/global/types';

import { updateLikeInGameCache } from './helper';

const useUnlikeGameUpdate = () => {
  const queryClient = useQueryClient();

  const processUnlikeCacheInGame = useCallback(
    (_: CustomAxiosResponse<DeleteUnlikeResponse>, params: CreateUnlikeBody) => {
      queryClient.cancelQueries({ queryKey: ['game', params.interactiveEntityId.toString()] });
      queryClient.setQueryData(
        ['game', params.interactiveEntityId.toString()],
        (oldData: CustomAGameResponse | undefined) => updateLikeInGameCache(oldData, false, UPDATE_CACHE_TYPE.UPDATE)
      );
    },
    [queryClient]
  );

  return { processUnlikeCacheInGame };
};

export default useUnlikeGameUpdate;
