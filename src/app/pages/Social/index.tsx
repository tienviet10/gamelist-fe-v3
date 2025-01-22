import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';
import ListActivities from '@app/components/ListActivities';
import Trend from '@app/components/Trend';

import styles from './Forum.module.scss';

function Forum() {
  return (
    <ContentWrapper>
      <div className={styles.forumContainer}>
        <div className={styles.forum}>
          <ListActivities postType="global" />
          <Trend />
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Forum;
