import useDeleteComment from '@app/services/post/useDeleteComment';
import useDeleteCommentUpdateCache from '@app/services/post/useDeleteCommentUpdateCache';

const useComment = () => {
  const { processDeleteCommentCache } = useDeleteCommentUpdateCache();
  const { deleteCommentMutation } = useDeleteComment({ onSuccess: processDeleteCommentCache });

  return { deleteCommentMutation };
};

export default useComment;
