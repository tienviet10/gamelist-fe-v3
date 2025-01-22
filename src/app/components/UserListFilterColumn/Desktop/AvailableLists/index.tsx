import { useEffect, useMemo } from 'react';

import type { SelectedListTypes } from '@app/constants/global/types';
import useGetUserGames from '@app/services/usergames/useGetUserGames';
import { setUserGameFilters } from '@app/store/gameFiltersSlice';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';

import type { DataList } from './types';

import styles from './AvailableListsStyle.module.scss';

function AvailableLists() {
  const dispatch = useAppDispatch();
  // const gameFilters = useAppSelector((state) => state.userGameFilters);
  const listOrder = useAppSelector((state) => state.userGames);
  const { userGames, getUserGames } = useGetUserGames();

  useEffect(() => {
    if (getUserGames) {
      getUserGames();
    }
  }, [getUserGames]);

  const data = useMemo(() => {
    const dataArray: DataList[] = [
      {
        name: 'Planning',
        value: 'planning',
        count: userGames?.data.data.userGamesByStatus?.planningCount ?? 0,
      },
      {
        name: 'Playing',
        value: 'playing',
        count: userGames?.data.data.userGamesByStatus?.playingCount ?? 0,
      },
      {
        name: 'Paused',
        value: 'paused',
        count: userGames?.data.data.userGamesByStatus?.pausedCount ?? 0,
      },
      {
        name: 'Completed',
        value: 'completed',
        count: userGames?.data.data.userGamesByStatus?.completedCount ?? 0,
      },
      {
        name: 'Dropped',
        value: 'dropped',
        count: userGames?.data.data.userGamesByStatus?.droppedCount ?? 0,
      },
      {
        name: 'JustAdded',
        value: 'justAdded',
        count: userGames?.data.data.userGamesByStatus?.justAddedCount ?? 0,
      },
    ];

    const newArray = listOrder.listOrder
      .map((value) => dataArray.find((item) => item.value === value))
      .filter((item) => item && item.count > 0);

    newArray.unshift({
      name: 'All',
      value: 'all',
      count: dataArray.reduce((acc, curr) => acc + curr.count, 0),
    });

    return newArray ?? [];
  }, [
    userGames?.data.data.userGamesByStatus?.completedCount,
    userGames?.data.data.userGamesByStatus?.droppedCount,
    userGames?.data.data.userGamesByStatus?.pausedCount,
    userGames?.data.data.userGamesByStatus?.planningCount,
    userGames?.data.data.userGamesByStatus?.playingCount,
    userGames?.data.data.userGamesByStatus?.justAddedCount,
    listOrder.listOrder,
  ]);

  const handleItemClick = (item: SelectedListTypes | undefined) => {
    if (!item) return;

    dispatch(setUserGameFilters({ selectedList: item }));
  };

  return (
    // <List
    //   className={styles.listStyle}
    //   dataSource={data}
    //   renderItem={(item) => (
    //     <List.Item
    //       data-testid={`listitem-${item.name}`}
    //       onClick={() => handleItemClick(item.value)}
    //       style={gameFilters.selectedList === item.name.toLowerCase() ? { backgroundColor: '#e0ddd3' } : {}}
    //     >
    //       <div className={styles.listName}>
    //         <p>{item.name}</p>
    //         <Badge showZero color="rgb(63, 114, 175)" count={item.count} />
    //       </div>
    //     </List.Item>
    //   )}
    // />
    <div className={styles.listStyle}>
      {data.map((item) => (
        <button
          key={item?.name}
          onClick={() => handleItemClick(item?.value)}
          style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
        >
          <div>{item?.name}</div>
          <div>{item?.count}</div>
        </button>
      ))}
    </div>
  );
}

export default AvailableLists;
