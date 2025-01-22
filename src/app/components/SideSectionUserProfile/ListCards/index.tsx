import { Link } from 'react-router-dom';

import type { Game } from '@app/constants/global/types';

import styles from './ListCards.module.scss';

export default function ListCards({ status, gameData }: { status: string; gameData: Game[] }) {
  return (
    <div className={styles.listContainer}>
      <h2>{status === 'justAdded' ? 'Just Added' : status}</h2>
      <div className={styles.listCards}>
        {Array.isArray(gameData) &&
          gameData.length > 0 &&
          gameData.map((game) => (
            <Link className={styles.listCard} key={game.id} to={`/game-detail/${game.id}/${game.name}`}>
              {game.imageURL && <img alt={game.name} src={game.imageURL} />}
            </Link>
          ))}
      </div>
    </div>
  );
}
