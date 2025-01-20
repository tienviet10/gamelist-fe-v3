import { Link, useLocation } from 'react-router-dom';

import styles from './UserLink.module.scss';

function UserLink({ linkName, children }: { linkName: string; children: string }) {
  const location = useLocation();
  const link = location.pathname;

  return (
    <Link className={`${styles.userLink} ${link === linkName && styles.activeLink}`} to={linkName}>
      {children}
    </Link>
  );
}

export default UserLink;
