import useCreateLike from '@app/services/post/useCreateLike';
import useCreateUnlike from '@app/services/post/useCreateUnlike';
import useLikePostUpdateCache from '@app/services/post/useLikePostUpdateCache';
import useUnlikePostUpdateCache from '@app/services/post/useUnlikePostUpdateCache';

const useLike = () => {
  const { processLikeCacheInPost } = useLikePostUpdateCache();
  const { createLikeMutation } = useCreateLike({ onSuccess: processLikeCacheInPost });
  const { processUnlikeCacheInPost } = useUnlikePostUpdateCache();
  const { createUnlikeMutation } = useCreateUnlike({ onSuccess: processUnlikeCacheInPost });

  return { createLikeMutation, createUnlikeMutation };
};

export default useLike;
