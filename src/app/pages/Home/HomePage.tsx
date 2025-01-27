import GamesList from '@app/components/AllGames/GamesList';
import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';
import { useAppSelector } from '@app/store/hooks';

import SwitchButton from './SwitchButton';

import styles from './Home.module.scss';

function HomePage() {
  const homeSearchState = useAppSelector((state) => state.homeSearch);

  return (
    <ContentWrapper>
      <div className={styles.homeContainer}>
        <div className={`${styles.gamesContainer} ${homeSearchState.view === 'grid' ? null : styles.listsContainer}`}>
          {/* <FiltersWrapper /> */}
          {/* <InfoBar /> */}
          <SwitchButton />
          <GamesList />
        </div>
      </div>
    </ContentWrapper>
  );
}

export default HomePage;
