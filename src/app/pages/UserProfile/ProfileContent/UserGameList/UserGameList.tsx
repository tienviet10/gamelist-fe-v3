import { useEffect, useMemo } from 'react';

import UserGamesTable from '@app/components/GamesListTable';
import type { ListsOrderType } from '@app/constants/global/types';
import useGetUserGames from '@app/services/usergames/useGetUserGames';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setInitialState } from '@app/store/userGamesListSlice';

import styles from './UserGameListStyle.module.scss';

function UserGameList() {
  const dispatch = useAppDispatch();
  const selectedList = useAppSelector((state) => state.userGameFilters.selectedList);
  const listOrder: ListsOrderType[] = useAppSelector((state) => state.userGames.listOrder);
  const { userGames, userDataIsLoading, getUserGames } = useGetUserGames();

  useEffect(() => {
    getUserGames();
  }, [getUserGames]);

  // Initialize the listsOrder, selectedLists, and localListOrder in redux toolkit
  useEffect(() => {
    if (userGames?.data.data.userGamesByStatus?.listsOrder) {
      dispatch(setInitialState(userGames?.data.data.userGamesByStatus?.listsOrder.split(',') as ListsOrderType[]));
    }
  }, [dispatch, userGames?.data.data.userGamesByStatus?.listsOrder]);

  const listToDisplay = useMemo(() => {
    if (selectedList === 'all') {
      return listOrder;
    }

    return [selectedList];
  }, [listOrder, selectedList]);

  if (userDataIsLoading || !userGames?.data.data.userGamesByStatus) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainContainer}>
      {/* <FilterColumn /> */}
      <div>Filtered Columns</div>
      <div>
        {listToDisplay.map((list) => (
          <UserGamesTable
            gamesData={userGames?.data.data.userGamesByStatus[list]}
            key={list}
            title={list[0].toUpperCase() + list.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}

export default UserGameList;
