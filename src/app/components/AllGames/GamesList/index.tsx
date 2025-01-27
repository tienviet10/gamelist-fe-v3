// The amount of games to request from the server. This is used for infinite scrolling. When the user scrolls down enough and needs to fetch more games,

import { useCallback, useState } from 'react';

// import { GameDataType } from '@app/components/GamesListTable/types';
import InView from '@app/components/IntersectionObserverView/IntersectionObserverView';
import { REACT_QUERY_STATUS } from '@app/constants/global/constants';
import { Game, RequiredGameWithIsAdded } from '@app/constants/global/types';
// import useGetUserGameState from '@app/pages/UserProfile/ProfileContent/UserGameList/useGetUserGameState';
import useAllGames from '@app/services/game/useAllGames';
import { useAppSelector } from '@app/store/hooks';
import { Card } from '@lib/Card/Card';

import MemoedGameCard from './GameCard';
import MemoizedList from './List';

import styles from './GamesList.module.scss';

// This value will be the amount of games we fetch.
const DEFAULT_FETCH_AMOUNT = 20;

export default function GamesList() {
  const homeSearchState = useAppSelector((state) => state.homeSearch);
  const data = useAllGames(DEFAULT_FETCH_AMOUNT);
  // States for modal to edit list
  // const { userGameLoading, fetchUserGame } = useUserGameById();
  const [open, setOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | undefined | RequiredGameWithIsAdded>();
  // const { userGameDataIsLoading } = useGetUserGameState(selectedGame?.id);

  const memorizedOpenGameListEditor = useCallback((game: Game) => {
    setSelectedGame(game);
    setOpen(true);
  }, []);

  const fetchNextPage = async () => {
    if (
      data.status === REACT_QUERY_STATUS.SUCCESS &&
      (!data.isFetching || !data.isFetchingNextPage) &&
      data.hasNextPage &&
      data.fetchNextPage
    ) {
      await data.fetchNextPage();
    }
  };

  // TODO: Add Loading component
  if (data.status === REACT_QUERY_STATUS.PENDING) {
    return <div>Loading...</div>;
  }

  // TODO: Add Error component
  if (data.status === REACT_QUERY_STATUS.ERROR) {
    return <div>Error here</div>;
  }

  return (
    <div aria-label={`view-${homeSearchState.view}`}>
      {homeSearchState.view === 'grid' ? (
        <Card title="All Games">
          <div>
            {data?.data?.pages.map((page) =>
              page.data.data.games.map((game) => (
                <MemoedGameCard
                  colorBgContainer=""
                  game={game}
                  key={`grid-${game.id}`}
                  openGameListEditor={memorizedOpenGameListEditor}
                />
              ))
            )}
            <InView onChange={fetchNextPage} />
          </div>
        </Card>
      ) : (
        <div className={styles.allListContainer}>
          <div className={styles.allListTitle}>All Games</div>
          <div className={styles.allListDivider}>
            {data?.data?.pages.map((page) =>
              page.data.data.games.map((game) => (
                <MemoizedList colorBgContainer="" game={game} key={`list-${game.id}`} />
              ))
            )}

            <InView onChange={fetchNextPage} />
          </div>
        </div>
      )}
      {/* <ListEditor
        game={selectedGame as GameDataType}
        isGameAdded={selectedGame?.gameAdded}
        open={open}
        setOpen={setOpen}
        setSelectedGame={setSelectedGame}
        userGameLoading={userGameDataIsLoading}
      /> */}
    </div>
  );
}
