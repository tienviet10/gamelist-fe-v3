import { memo } from 'react';
import Color from 'color-thief-react';

import { GameCardType } from '../types';

import styles from './List.module.scss';

function List({ game, colorBgContainer = '' }: GameCardType): JSX.Element {
  return (
    <Color
      crossOrigin="anonymous"
      format="hex"
      src={game.imageURL ? game.imageURL : 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4a7a.png'}
    >
      {({ data }) => (
        <div className={styles.gameListContainer} style={{ backgroundColor: `${colorBgContainer}` }}>
          <div className={styles.gameRankNumber}>
            <span className={styles.gameRankHash}>#</span>
            {game.id}
          </div>
          <a className={styles.gameLink} href={`/game-detail/${game.id}/${game.name}`}>
            {game.imageURL ? <img alt={game.name} className={styles.gameImage} src={game?.imageURL} /> : null}
          </a>
          <div className={styles.gameContent}>
            <div className={styles.gameTitle}>
              <div>
                <a href={`/game-detail/${game.id}/${game.name}`} style={{ color: `${data}` }}>
                  {game.name}
                </a>
              </div>
              <div className={styles.gameGenres}>
                {game.genres.map((genre: string) => (
                  <div key={`${game.id} ${genre}`}>{genre}</div>
                ))}
                {game.tags.map((tag: string) => (
                  <div key={`${game.id} ${tag}`}>{tag}</div>
                ))}
              </div>
            </div>
            <div className={styles.gameRating}>
              {/* {game.avgScore ? getRatingIcon(game.avgScore, `${data}`) : null} */}
              <div style={{ color: `${data}` }}>
                Rating: {game.avgScore}
                <div>Based on: {game.totalRating} Users</div>
              </div>
            </div>
            <div className={styles.gamePlatforms} data-testid="gamePlatforms">
              {game.platforms.map((platform: string) => (
                <div
                  className={styles.gamePlatform}
                  color="rgb(17, 45, 78)"
                  key={`${game.id}-${platform}`}
                  style={{
                    marginBottom: '5px',
                    maxWidth: '125px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {platform}
                </div>
              ))}
            </div>
            <div className={styles.gameReleaseDate}>
              <div>Release Date: </div>
              {new Date(game.releaseDate).toISOString().slice(0, 10)}
            </div>
          </div>
        </div>
      )}
    </Color>
  );
}

const MemoizedList = memo(List);

export default MemoizedList;
