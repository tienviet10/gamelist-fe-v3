import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import type { PostsDTOResponse, StatusUpdatesDTOResponse } from '@app/constants/global/types';
import usePostsAndStatusUpdates from '@app/services/InteractiveEntity/usePostsAndStatusUpdates';

import ActivitiesUpdates from './ActivitiesUpdates';
import getSortedSocialData, { PostsAndStatusUpdatesType } from './getSortedSocialData';

import styles from './ListActivities.module.scss';

function ListActivities() {
  const [socials, setSocials] = useState<(PostsDTOResponse | StatusUpdatesDTOResponse)[]>([]);

  const { postsAndStatusUpdatesIsLoading, hasNextPage, fetchNextPage, isFetchingNextPage, getPostsAndStatusUpdates } =
    usePostsAndStatusUpdates();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['postsAndStatusUpdates']);

  useEffect(() => {
    if (!data) return;

    setSocials(getSortedSocialData(data as PostsAndStatusUpdatesType));
  }, [data]);

  if (postsAndStatusUpdatesIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.listActivitiesContainer}>
      <h2 className={styles.title}>
        Activities
        {/* <Dropdown arrow menu={{ items }} overlayClassName="dropdownFilter" trigger={['click']}>
          <Space>
            Filter <DownOutlined />
          </Space>
        </Dropdown> */}
      </h2>
      {/* <MemoizedPostInput post={post} setPost={setPost} /> */}
      <ActivitiesUpdates
      // fetchMore={fetchNextPage}
      // hasNextPage={hasNextPage}
      // isFetchingNextPage={isFetchingNextPage}
      // socials={socials}
      />
    </div>
  );
}

export default ListActivities;
