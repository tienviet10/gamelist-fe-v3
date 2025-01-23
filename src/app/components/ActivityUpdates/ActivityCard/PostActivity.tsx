import type { PostsDTOResponse } from '@app/constants/global/types';
import useAddFollow from '@app/services/social/useAddFollow';
import { Button } from '@lib/Button/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@lib/Dialog/Dialog';

import styles from './PostActivity.module.scss';

function PostActivity({ post, username }: { post: PostsDTOResponse; username: string }) {
  // const { handleAddFollow, contextHolder: handleFollowContextHolder } =
  //   useAddRemoveFollowCustomHook();
  const { addFollowMutation } = useAddFollow();

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
        <Dialog>
          <DialogTrigger asChild>
            <img
              alt="Avatar"
              src={post?.user?.userPicture}
              style={{ width: '50px', height: '50px', borderRadius: '100%' }}
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Are you sure you want to follow {post?.user?.username}?</DialogTitle>
              <DialogDescription>You will see their posts or status in your feed.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <DialogTrigger>
                <Button onClick={() => addFollowMutation(post?.user)}>Confirm</Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
