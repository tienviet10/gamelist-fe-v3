import { useCallback, useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type { CustomCommentsResponse, OldPostsAndStatusUpdatesDataType } from '@app/constants/global/types';
import { updateCommentInCache } from '@app/services/post/helper';
import useGetComment from '@app/services/post/useGetComment';

function LoadMoreButton({ startingId, interactiveEntityId }: { startingId: number; interactiveEntityId: number }) {
  const queryClient = useQueryClient();
  const [buttonActivate, setButtonActivate] = useState(false);
  const { commentsData } = useGetComment({ startingId, interactiveEntityId, buttonActivate });

  const modifiedCache = useCallback(
    (newData: CustomCommentsResponse) => {
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updateCommentInCache(oldData, newData?.data?.data, interactiveEntityId, UPDATE_CACHE_TYPE.UPDATE)
      );
      setButtonActivate(false);
    },
    [interactiveEntityId, queryClient]
  );

  useEffect(() => {
    if (commentsData) {
      modifiedCache(commentsData);
    }
  }, [commentsData, modifiedCache]);

  return <button onClick={() => setButtonActivate(true)}>Load More</button>;
}

export default LoadMoreButton;
