import { Link } from 'react-router-dom';

import { Game } from '@app/constants/global/types';

import styles from './GamesTrends.module.scss';

function GamesTrends({ games, title }: { games: false | Game[] | undefined; title: string }) {
  return (
    <div>
      <div className={styles.trendHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.trendBody}>
        {games
          ? games.map((game) => (
              <div className={styles.trendGameCard} key={game.id}>
                <Link
                  style={{ backgroundImage: `url(${game.imageURL})` }}
                  to={`/game-detail/${game.id}/${game.name}`}
                />
                <div className={styles.trendContent}>
                  <a href={`/game-detail/${game.id}/${game.name}`}>{game.name}</a>
                  <div className={styles.trendInfo}>
                    {title === 'Trending Games' ? `Score:${game?.avgScore}` : `Total Played: ${game?.totalRating}`}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default GamesTrends;
