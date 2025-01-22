import {
  favoriteUserProfileRoute,
  gameListUserProfileRoute,
  overviewRoute,
  reviewsUserProfileRoute,
  socialUserProfileRoute,
} from '@app/constants/global/urls';

import Favorites from './Favorites/Favorites';
import Overview from './Overview/Overview';
import Reviews from './Reviews/Reviews';
import Social from './Social/Social';
import UserGameList from './UserGameList/UserGameList';

import styles from './ProfileContent.module.scss';

function ProfileContent({ routeName }: { routeName: string }) {
  return (
    <div className={styles.profileFullBackground}>
      <div className={styles.profileContent}>
        {(() => {
          switch (routeName) {
            case overviewRoute:
              return <Overview />;
            case favoriteUserProfileRoute:
              return <Favorites />;
            case reviewsUserProfileRoute:
              return <Reviews />;
            case socialUserProfileRoute:
              return <Social />;
            case gameListUserProfileRoute:
              return <UserGameList />;
            default:
              return <Overview />;
          }
        })()}
      </div>
    </div>
  );
}

export default ProfileContent;
