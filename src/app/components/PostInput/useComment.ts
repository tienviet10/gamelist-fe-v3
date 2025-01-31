import useCreateComment from '@app/services/post/useCreateComment';
import useCreateCommentUpdateCache from '@app/services/post/useCreateCommentUpdateCache';

const useComment = () => {
  const { processCreateCommentCache } = useCreateCommentUpdateCache();
  const { createCommentMutation } = useCreateComment({ onSuccess: processCreateCommentCache });

  return {
    createCommentMutation,
  };
};

export default useComment;
