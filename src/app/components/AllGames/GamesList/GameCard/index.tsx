import { memo } from 'react';
import Color from 'color-thief-react';
import { Link } from 'react-router-dom';

import { Card } from '@lib/Card/Card';

import type { GameCardType } from '../types';

import styles from './GameCard.module.scss';

function NeedMemoedGameCard({ game, colorBgContainer, openGameListEditor }: GameCardType) {
  return (
    <Color
      crossOrigin="anonymous"
      format="hex"
      src={game.imageURL ? game.imageURL : 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4a7a.png'}
    >
      {({ data, error }) => (
        <div className={styles.colGameCardContainer} key={game.id}>
          {error ? (
            <p>Error!</p>
          ) : (
            <Link to={`/game-detail/${game.id}/${game.name}`}>
              {game.imageURL ? (
                <Card
                  // bodyStyle={{
                  //   padding: '24px 24px 24px 10px',
                  //   backgroundColor: colorBgContainer,
                  // }}
                  // bordered={false}
                  className={styles.cardGameContainer}
                  // cover={<img alt="example" src={game.imageURL} />}
                  game-card-id={game.id}
                  style={{
                    backgroundColor: colorBgContainer,
                  }}
                >
                  <img alt="example" src={game.imageURL} />
                  {/* <Meta className={styles.metaGameDescription} style={{ color: `${data}` }} title={game.name} /> */}
                  <div>{game.name}</div>
                </Card>
              ) : null}
            </Link>
          )}
          <button
            className={styles.buttonGameHoverShow}
            onClick={() => {
              if (openGameListEditor) {
                openGameListEditor(game);
              }
            }}
            style={{
              color: `${data}`,
            }}
          >
            {game.gameAdded ? (
              // <EditOutlined
              //   style={{
              //     fontSize: '14px',
              //   }}
              // />
              <div>Edit</div>
            ) : (
              // <PlusCircleOutlined style={{ fontSize: '14px' }} />
              <div>Plus</div>
            )}
          </button>
        </div>
      )}
    </Color>
  );
}

const MemoedGameCard = memo(NeedMemoedGameCard);

export default MemoedGameCard;
