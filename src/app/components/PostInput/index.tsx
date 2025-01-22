import { memo, useEffect, useRef, useState } from 'react';

import styles from './PostInput.module.scss';

type PostInputProps = {
  commentType?: string;
  commentId?: number;
  isComment?: boolean;
};

function PostInput({ commentType, commentId, isComment }: PostInputProps) {
  const postRef = useRef<HTMLTextAreaElement>(null);
  const [details, setDetails] = useState<string>('');
  // const { createPostMutation } = usePosts();

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
          onClick={async () => {
            // if (setPost && createPostMutation && post) {
            //   createPostMutation(
            //     { text: post },
            //     {
            //       onSuccess: () => {
            //         success(`You have posted successfully.`);
            //         setPost('');
            //       },
            //       onError: (error) => {
            //         warning(`Can not post. ${error.message}!`);
            //       },
            //     }
            //   );
            // } else if (setComment && comment && commentId && commentType) {
            //   // const response = await addComment(
            //   //   commentId,
            //   //   commentType,
            //   //   comment
            //   // );
            //   // if (response?.comment && response?.errors?.length === 0) {
            //   //   success(`Your comment about has been posted successfully.`);
            //   // } else {
            //   //   warning(`Can not post comment. ${response.errors}!`);
            //   // }
            //   setComment('');
            // } else if (setPost && !post) {
            //   warning(`Please write something to post.`);
            // }
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
