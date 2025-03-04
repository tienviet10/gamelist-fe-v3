import type { RequiredGame } from '@app/constants/global/types';
import { useAppSelector } from '@app/store/hooks';

import UserGameListDesktop from './Desktop';

import styles from './UserGamesTable.module.scss';

type GameDataType = RequiredGame & { key: number };

function UserGamesTable({ gamesData, title }: { gamesData: RequiredGame[]; title: string }) {
  const { search, platforms, tags, genres } = useAppSelector((state) => state.userGameFilters);

  let games: GameDataType[] = gamesData.map((val: RequiredGame) => ({
    key: val.id,
    ...val,
  }));

  if (platforms) {
    games = games.filter((val) => val.platforms.includes(platforms));
  }

  if (tags) {
    games = games.filter((val) => val.tags.includes(tags));
  }

  if (genres) {
    games = games.filter((val) => val.genres.includes(genres));
  }

  if (search) {
    games = games.filter((val) =>
      (val.name + val.platforms.join(',') + val.genres.join(',') + val.tags.join(',') + val.avgScore)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }

  return (
    <div>
      {games?.length > 0 ? (
        <>
          <h3 className={styles.Title}>{title}</h3>
          <div className={styles.TableContainer}>
            <UserGameListDesktop data={games} />
          </div>
          {/* <div className={styles.TableContainerSmall}>
            <UserGameListMobile data={games} />
          </div> */}
        </>
      ) : (
        <div className={styles.placeholderStyle} />
      )}
    </div>
  );
}

export default UserGamesTable;
