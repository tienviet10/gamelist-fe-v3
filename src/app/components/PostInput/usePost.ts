import useCreatePost from '@app/services/post/useCreatePost';
import useCreatePostUpdateCache from '@app/services/post/useCreatePostUpdateCache';

const usePost = () => {
  const { processCreatePostCache } = useCreatePostUpdateCache();
  const { createPostMutation } = useCreatePost({ onSuccess: processCreatePostCache });

  return { createPostMutation };
};

export default usePost;
