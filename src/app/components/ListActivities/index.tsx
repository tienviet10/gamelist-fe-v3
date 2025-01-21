import MemoizedPostInput from '@app/components/PostInput';

import ActivitiesUpdates from '../ActivityUpdates/ActivitiesUpdates';

import styles from './ListActivities.module.scss';

const items = [
  {
    label: 'All',
    key: '0',
  },
  {
    label: 'Statuses',
    key: '1',
  },
  {
    label: 'Posts',
    key: '3',
  },
];

function ListActivities({ postType = '' }: { postType?: string }) {
  return (
    <div className={styles.listActivitiesContainer}>
      <h2 className={styles.title}>
        Activities
        {/* <Dropdown arrow menu={{ items }} overlayClassName="dropdownFilter" trigger={['click']}>
          <Space>
            Filter <DownOutlined />
          </Space>
        </Dropdown> */}
        <select>
          <option value="">Filter</option>
          {items.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>
      </h2>
      <MemoizedPostInput />
      <ActivitiesUpdates postType={postType} />
    </div>
  );
}

export default ListActivities;
