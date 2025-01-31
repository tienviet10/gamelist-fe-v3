import { useCallback, useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { UPDATE_CACHE_TYPE } from '@app/constants/global/constants';
import type { CustomCommentsResponse, OldPostsAndStatusUpdatesDataType } from '@app/constants/global/types';
import { updateCommentInCache } from '@app/services/post/helper';
import useGetComment from '@app/services/post/useGetComment';

function LoadMoreButton({
  startingId,
  interactiveEntityId,
  page,
}: {
  startingId: number;
  interactiveEntityId: number;
  page: number;
}) {
  const queryClient = useQueryClient();
  const [buttonActivate, setButtonActivate] = useState(-1);
  const { commentsData, commentsDataIsLoading } = useGetComment({ startingId, interactiveEntityId, buttonActivate });

  const modifiedCache = useCallback(
    (newData: CustomCommentsResponse, currentPage: number) => {
      setButtonActivate(-1);
      queryClient.cancelQueries({ queryKey: ['postsAndStatusUpdates'] });
      queryClient.setQueryData(['postsAndStatusUpdates'], (oldData: OldPostsAndStatusUpdatesDataType | undefined) =>
        updateCommentInCache(oldData, newData?.data?.data, interactiveEntityId, currentPage, UPDATE_CACHE_TYPE.UPDATE)
      );
    },
    [interactiveEntityId, queryClient]
  );

  useEffect(() => {
    if (!commentsDataIsLoading && commentsData && buttonActivate === page) {
      modifiedCache(commentsData, buttonActivate);
    }
  }, [buttonActivate, commentsData, commentsDataIsLoading, modifiedCache, page]);

  return <button onClick={() => setButtonActivate(page)}>Load More</button>;
}

export default LoadMoreButton;
