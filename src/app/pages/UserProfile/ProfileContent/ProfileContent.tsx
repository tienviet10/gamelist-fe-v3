import {
  favoriteUserProfileRoute,
  gameListUserProfileRoute,
  overviewRoute,
  reviewsUserProfileRoute,
  socialUserProfileRoute,
} from '@app/constants/global/urls';

import Favorites from './Favorites/Favorites';
import OverView from './Overview/OverView';
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
              return <OverView />;
            case favoriteUserProfileRoute:
              return <Favorites />;
            case reviewsUserProfileRoute:
              return <Reviews />;
            case socialUserProfileRoute:
              return <Social />;
            case gameListUserProfileRoute:
              return <UserGameList />;
            default:
              return <OverView />;
          }
        })()}
      </div>
    </div>
  );
}

export default ProfileContent;
