import useCreateLike from '@app/services/post/useCreateLike';
import useCreateUnlike from '@app/services/post/useCreateUnlike';
import useLikePostUpdate from '@app/services/post/useLikePostUpdate';
import useUnlikePostUpdate from '@app/services/post/useUnlikePostUpdate';

const useLike = () => {
  const { processLikeCacheInPost } = useLikePostUpdate();
  const { createLikeMutation } = useCreateLike({ onSuccess: processLikeCacheInPost });
  const { processUnlikeCacheInPost } = useUnlikePostUpdate();
  const { createUnlikeMutation } = useCreateUnlike({ onSuccess: processUnlikeCacheInPost });

  return { createLikeMutation, createUnlikeMutation };
};

export default useLike;
