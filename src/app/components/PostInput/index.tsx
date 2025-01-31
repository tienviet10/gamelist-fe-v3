import { memo, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import useComment from './useComment';
import usePost from './usePost';

import styles from './PostInput.module.scss';

type PostInputProps = {
  // commentType?: string;
  commentId?: number;
  isComment?: boolean;
  page?: number;
};

function PostInput({
  // commentType,
  commentId,
  isComment,
  page,
}: PostInputProps) {
  const postRef = useRef<HTMLTextAreaElement>(null);
  const [details, setDetails] = useState<string>('');
  const { createPostMutation } = usePost();
  const { createCommentMutation } = useComment();

  // const { success, contextHolder, warning } = useNotification();

  useEffect(() => {
    if (!isComment) {
      postRef.current?.focus();
    }
  }, [isComment]);

  return (
    <div className={styles.postInputContainer}>
      <textarea
        autoComplete="off"
        className={styles.postTextarea}
        onChange={(e) => setDetails(e.target.value)}
        placeholder={`${isComment ? 'Comment' : 'Post'} something...`}
        value={details}
      />
      <div className={styles.postConfirmContainer}>
        <button onClick={() => setDetails('')}>Cancel</button>
        <button
          onClick={() => {
            if (commentId) {
              createCommentMutation(
                { interactiveEntityId: commentId.toString(), text: details, page: page || 0 },
                {
                  onSuccess: () => {
                    toast(`You have commentted successfully.`);
                  },
                  onError: (error) => {
                    toast.warn(`Cannot post. ${error.message}!`);
                  },
                }
              );
            } else {
              createPostMutation(
                { text: details },
                {
                  onSuccess: () => {
                    toast(`You have posted successfully.`);
                  },
                  onError: (error) => {
                    toast.warn(`Can not post. ${error.message}!`);
                  },
                }
              );
            }

            setDetails('');
          }}
        >
          {isComment ? 'Comment' : 'Post'}
        </button>
      </div>
    </div>
  );
}

const MemoizedPostInput = memo(PostInput);

export default MemoizedPostInput;
