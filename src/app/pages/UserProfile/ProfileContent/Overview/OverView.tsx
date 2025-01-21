import { useEffect } from 'react';

import MainSection from '@app/components/MainSectionUserProfile';
import SideSection from '@app/components/SideSectionUserProfile';
import useGetUserGames from '@app/services/usergames/useGetUserGames';

import styles from './Overview.module.scss';

function Overview() {
  const { userGames, userDataIsLoading, getUserGames } = useGetUserGames();

  useEffect(() => {
    if (getUserGames) {
      getUserGames();
    }
  }, [getUserGames]);

  if (userDataIsLoading || !userGames) return <div>Loading...</div>;

  return (
    <div className={styles.overview}>
      <SideSection />
      <MainSection />
    </div>
  );
}

export default Overview;
