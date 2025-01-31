import useCreateLike from '@app/services/post/useCreateLike';
import useCreateUnlike from '@app/services/post/useCreateUnlike';
import useLikeGameUpdateCache from '@app/services/post/useLikeGameUpdateCache';
import useUnlikeGameUpdateCache from '@app/services/post/useUnlikeGameUpdateCache';

const useLike = () => {
  const { processLikeCacheInGame } = useLikeGameUpdateCache();
  const { createLikeMutation } = useCreateLike({ onSuccess: processLikeCacheInGame });
  const { processUnlikeCacheInGame } = useUnlikeGameUpdateCache();
  const { createUnlikeMutation } = useCreateUnlike({ onSuccess: processUnlikeCacheInGame });

  return { createLikeMutation, createUnlikeMutation };
};

export default useLike;
