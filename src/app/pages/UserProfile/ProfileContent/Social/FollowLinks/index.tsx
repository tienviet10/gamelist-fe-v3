import CustomSocialTab from '@app/components/CustomSocialTab';

import styles from './FollowLinks.module.scss';

type FollowLinksProps = 'Followings' | 'Followers';

const tabs: FollowLinksProps[] = ['Followings', 'Followers'];

function FollowLinks({
  selectedFilter,
  setSelectedFilter,
}: {
  selectedFilter: FollowLinksProps;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FollowLinksProps>>;
}) {
  return (
    <div>
      <div className={styles.followLinksContainer}>
        <div className={styles.linksHeader}>Social</div>
        {tabs.map((tab) => (
          <CustomSocialTab
            activeStyle={selectedFilter === tab ? styles.selected : ''}
            key={tab}
            onPress={() => setSelectedFilter(tab)}
            text={tab}
          />
        ))}
      </div>
    </div>
  );
}

export default FollowLinks;
