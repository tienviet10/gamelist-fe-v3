import { PostsDTOResponse } from '@app/constants/global/types';

import styles from './PostActivity.module.scss';

function PostActivity({ post, username }: { post: PostsDTOResponse; username: string }) {
  // const { handleAddFollow, contextHolder: handleFollowContextHolder } =
  //   useAddRemoveFollowCustomHook();
  // const { handleAddFollow, contextHolder } = useHandleAddRemoveFollow();

  return (
    <div className={styles.postActivityContainer}>
      <div className={styles.postActivityHeader}>
        {/* <Avatar
          onClick={async () => {
            if (post.user?.username && post.user?.username !== username) {
              await handleAddFollow(post.user);
            }
          }}
          size={50}
          src={post?.user?.userPicture}
          style={{ cursor: `${post.user?.username !== username && 'pointer'}` }}
        /> */}
        <img
          alt="Avatar"
          src={post?.user?.userPicture}
          style={{ width: '50px', height: '50px', borderRadius: '100%' }}
        />
        {post.user?.username && (
          <a aria-label={post.user.username} href={`/user/${post.user.username}`}>
            {' '}
            {post.user.username}
          </a>
        )}
      </div>
      <div className={styles.postActivityBody}>
        <div>
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
}

export default PostActivity;
