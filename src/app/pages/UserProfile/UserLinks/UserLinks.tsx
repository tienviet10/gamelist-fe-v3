import {
  favoriteUserProfileRoute,
  gameListUserProfileRoute,
  overviewRoute,
  reviewsUserProfileRoute,
  socialUserProfileRoute,
} from '@app/constants/global/urls';

import UserLink from './UserLink';

import styles from './UserLinks.module.scss';

type UserProfileLinksType = {
  [key: string]: string;
};

const UserProfileLinks: UserProfileLinksType = {
  Overview: overviewRoute,
  'Game List': gameListUserProfileRoute,
  Favorites: favoriteUserProfileRoute,
  Social: socialUserProfileRoute,
  Reviews: reviewsUserProfileRoute,
};

function UserLinks() {
  return (
    <div className={styles.navWrap}>
      <div className={styles.navContainer}>
        {Object.keys(UserProfileLinks).map((link) => (
          <UserLink key={link} linkName={UserProfileLinks[link]}>
            {link}
          </UserLink>
        ))}
      </div>
    </div>
  );
}

export default UserLinks;
