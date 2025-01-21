import { useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import MainSection from '@app/components/MainSectionUserProfile';
import SideSection from '@app/components/SideSectionUserProfile';
import useGetUserGames from '@app/services/usergames/useGetUserGames';

import styles from './Overview.module.scss';

function Overview() {
  const { userGames, userDataIsLoading, getUserGames } = useGetUserGames();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['userGames']);

  useEffect(() => {
    if (getUserGames && !data) {
      getUserGames();
    }
  }, [getUserGames, data]);

  if (userDataIsLoading || !userGames?.data?.data?.userGamesByStatus) return <div>Loading...</div>;

  return (
    <div className={styles.overview}>
      <SideSection
      // userGames={userGames?.data.data.userGamesByStatus}
      />
      <MainSection userGames={userGames?.data.data.userGamesByStatus} />
    </div>
  );
}

export default Overview;
