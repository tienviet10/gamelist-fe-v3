import { ChangeEvent, useMemo } from 'react';

import type { UserGameFiltersSortType } from '@app/constants/global/types';
import { setUserGameFilters } from '@app/store/gameFiltersSlice';
import { useAppDispatch } from '@app/store/hooks';

import styles from './SortListsStyle.module.scss';

type SortItemsListType = {
  label: string;
  value: UserGameFiltersSortType | undefined;
};

function SortLists() {
  // const gameFilters = useAppSelector((state) => state.userGameFilters);
  const dispatch = useAppDispatch();

  const sortItemsList: SortItemsListType[] = useMemo(
    () => [
      { label: 'Name', value: 'name' },
      { label: 'Average Score', value: 'avg_score' },
      { label: 'Newest Releases', value: 'newest_releases' },
      { label: 'Oldest Releases', value: 'oldest_releases' },
      { label: 'Last Updated', value: 'last_updated' },
      { label: 'Last Added', value: 'last_added' },
      { label: 'Start Date', value: 'start_date' },
      { label: 'Completed Date', value: 'completed_date' },
    ],
    []
  );

  return (
    // <Select
    //   className={styles.selectorsContainer}
    //   defaultValue="name"
    //   onChange={(value: SortItemsListType['value']) => {
    //     dispatch(setUserGameFilters({ sortBy: value }));
    //   }}
    //   options={sortItemsList}
    //   placement="topLeft"
    //   style={{ width: 150 }}
    //   value={gameFilters.sortBy}
    // />
    <select
      className={styles.selectorsContainer}
      defaultValue="name"
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setUserGameFilters({ sortBy: e.target.value as UserGameFiltersSortType }));
      }}
    >
      {sortItemsList.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default SortLists;
