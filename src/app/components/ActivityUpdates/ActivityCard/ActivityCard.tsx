import { useState } from 'react';

import getTimeElapsed from '@app/components/ListActivities/getTimeElapsed';
import MemoizedPostInput from '@app/components/PostInput';
import type { PostsDTOResponse, StatusUpdatesDTOResponse } from '@app/constants/global/types';

import PostActivity from './PostActivity';
import StatusUpdateActivity from './StatusUpdateActivity';

import styles from '../ActivitiesUpdates.module.scss';

function ActivityCard({
  activity,
  username,
}: {
  activity: PostsDTOResponse | StatusUpdatesDTOResponse;
  username: string;
}) {
  const { daysElapsed, hoursElapsed } = getTimeElapsed(activity.createdAt);
  const isCurrentLiked = activity.likes.some((like) => like.user.username === username);
  const [isCommentVisible, setIsCommentVisible] = useState<boolean>(activity.comments.length > 0);

  return (
    <div className={`${styles.activity} ${'text' in activity && styles.postActivity}`}>
      <div className={styles.activityContent}>
        {'userGame' in activity && <StatusUpdateActivity statusUpdate={activity} username={username} />}
        {'text' in activity && <PostActivity post={activity} username={username} />}
        <div className={styles.time}>{daysElapsed > 0 ? `${daysElapsed} days` : `${hoursElapsed} hours`} ago</div>
        <div className={styles.actions}>
          {/* <Popover
            arrow={false}
            content={() => likedAvatar(activity.likes)}
            overlayInnerStyle={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              marginTop: '-10px',
              paddingTop: '0px',
            }}
            placement="bottom"
            trigger="hover"
          >
            <CustomButton
              buttonType="link"
              icon={
                isCurrentLiked ? (
                  <HeartFilled className={styles.liked} />
                ) : (
                  <HeartOutlined className={styles.notLiked} />
                )
              }
              onPress={async () => {
                if (isCurrentLiked) {
                  // await removeLike(activity.id, activity.__typename as string);
                  console.log('remove like');
                } else {
                  // await addLike(activity.id, activity.__typename as string);
                  console.log('add like');
                }
              }}
            />
          </Popover> */}
          <button
            onClick={() => {
              if (isCurrentLiked) {
                // await removeLike(activity.id, activity.__typename as string);
              } else {
                // await addLike(activity.id, activity.__typename as string);
              }
            }}
          >
            {isCurrentLiked ? <div>Like</div> : <div>Unlike</div>}
          </button>
          <span className={`${styles.likeCount} ${activity.likes.length === 0 && styles.zeroCount}`}>
            {activity.likes.length}
          </span>
          <div>
            {isCommentVisible ? (
              // <MessageFilled
              //   className={styles.liked}
              //   onClick={() => {
              //     setIsCommentVisible(!isCommentVisible);
              //   }}
              // />
              <button
                onClick={() => {
                  setIsCommentVisible(!isCommentVisible);
                }}
              >
                FilledBtn
              </button>
            ) : (
              // <MessageOutlined
              //   className={styles.notLiked}
              //   onClick={() => {
              //     setIsCommentVisible(!isCommentVisible);
              //   }}
              // />
              <button
                onClick={() => {
                  setIsCommentVisible(!isCommentVisible);
                }}
              >
                EmptyBtn
              </button>
            )}
          </div>
          <span className={`${styles.likeCount} ${activity.comments.length === 0 && styles.zeroCount}`}>
            {activity.comments.length}
          </span>
        </div>
      </div>
      <div className={styles.replyContainer} style={{ display: `${isCommentVisible ? 'block' : 'none'}` }}>
        <div className={styles.activityReply}>
          {activity.comments.map((comment) => {
            const { daysElapsed: commentDaysElapsed, hoursElapsed: commentHoursElapsed } = getTimeElapsed(
              comment.createdAt
            );

            return (
              <div className={styles.replyList} key={comment.id}>
                <div className={styles.replyAvatar}>
                  {/* <Avatar
                    onClick={async () => {
                      if (comment.user.username && comment.user.username !== username) {
                        await handleAddFollow(comment.user);
                      }
                    }}
                    size={50}
                    src={comment.user.userPicture}
                    style={{
                      cursor: `${comment.user.username !== username && 'pointer'}`,
                    }}
                  /> */}
                  <img
                    alt="Avatar"
                    src={comment.user.userPicture}
                    style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                  />
                  {comment.user.username && (
                    <a aria-label={comment.user.username} href={`/user/${comment.user.username}`}>
                      {' '}
                      {comment.user.username}
                    </a>
                  )}
                  <div className={styles.replyActions}>
                    {/* <EditOutlined
                      className={`${styles.replyRemove} ${
                        comment.user.username === username && styles.replyRemoveVisible
                      }`}
                      onClick={async () => {
                        if (comment.user.id && comment.user.username === username) {
                          // await handleEditComment(comment);
                          console.log('edit your comment');
                        }
                      }}
                    /> */}
                    <button
                      onClick={() => {
                        if (comment.user.id && comment.user.username === username) {
                          // await handleEditComment(comment);
                        }
                      }}
                    >
                      Edit
                    </button>
                    {/* <CloseOutlined
                      className={`${styles.replyRemove} ${
                        comment.user.username === username && styles.replyRemoveVisible
                      }`}
                      onClick={async () => {
                        if (comment.user.username && comment.user.username === username) {
                          // await handleRemoveComment(comment);
                          console.log('remove your comment');
                        }
                      }}
                    /> */}
                    <button
                      onClick={() => {
                        if (comment.user.username && comment.user.username === username) {
                          // await handleRemoveComment(comment);
                        }
                      }}
                    >
                      Close
                    </button>
                    <div className={styles.time}>
                      {commentDaysElapsed > 0 ? `${commentDaysElapsed} days` : `${commentHoursElapsed} hours`} ago
                    </div>
                  </div>
                </div>
                <div className={styles.replyBody}>
                  <div>
                    <p>{comment.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <MemoizedPostInput
            isComment
            commentId={activity.id}
            commentType={'text' in activity ? 'post' : 'statusUpdate'}
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
