import { useAppSelector } from '@app/store/hooks';

import styles from './UserBanner.module.scss';

function UserBanner() {
  const { user, loading } = useAppSelector((state) => state.user);

  if (loading) return;

  return (
    <div className={styles.bannerContainerNull} style={{ backgroundImage: `url(${user.bannerPicture})` }}>
      <div className={styles.bannerImage}>
        <div className={styles.bannerShadow} />
        <div className={styles.imageContainer}>
          <div className={styles.userInfoContainer}>
            <img alt={user.username} src={user.userPicture} />
            <div className={styles.name}>
              <h1>{user.username}</h1>
            </div>
            <div className={styles.actions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBanner;
