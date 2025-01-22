import { useEffect, useState } from 'react';

import useGetFollow from '@app/services/social/useGetFollow';

import FollowLinks from './FollowLinks';
import Follows from './Follows';

import styles from './Social.module.scss';

function Social() {
  const { followDataIsLoading, refetchFollowData, followData } = useGetFollow();
  const [selectedFilter, setSelectedFilter] = useState<'Followings' | 'Followers'>('Followings');

  useEffect(() => {
    if (refetchFollowData) {
      refetchFollowData();
    }
  }, [refetchFollowData]);

  if (followDataIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.socialContainer}>
      <FollowLinks selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Follows
        followers={followData?.data.data.user.followers || []}
        follows={followData?.data.data.user.following || []}
        loading={followDataIsLoading}
        selectedFilter={selectedFilter}
      />
    </div>
  );
}

export default Social;
