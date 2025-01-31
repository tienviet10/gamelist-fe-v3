import useCreateLike from '@app/services/post/useCreateLike';
import useCreateUnlike from '@app/services/post/useCreateUnlike';
import useLikeGameUpdate from '@app/services/post/useLikeGameUpdate';
import useUnlikeGameUpdate from '@app/services/post/useUnlikeGameUpdate';

const useLike = () => {
  const { processLikeCacheInGame } = useLikeGameUpdate();
  const { createLikeMutation } = useCreateLike({ onSuccess: processLikeCacheInGame });
  const { processUnlikeCacheInGame } = useUnlikeGameUpdate();
  const { createUnlikeMutation } = useCreateUnlike({ onSuccess: processUnlikeCacheInGame });

  return { createLikeMutation, createUnlikeMutation };
};

export default useLike;
