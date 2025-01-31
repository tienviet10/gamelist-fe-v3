import { memo, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { useQueryClient } from '@tanstack/react-query';

import useLike from '@app/components/GameDetailHeader/GameDetailHeaderInfo/useLike';
import { CustomAGameResponse } from '@app/constants/global/types';
import { useAppSelector } from '@app/store/hooks';

import styles from '@app/components/GameDetailHeader/GameDetailHeaderInfo/GameDetailHeaderInfo.module.scss';

function GameDetailHeaderInfoTemp({ gameId }: { gameId: string }) {
  const queryClient = useQueryClient();
  const gameResponse: CustomAGameResponse | undefined = queryClient.getQueryData(['game', gameId]);
  const [open, setOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const { createLikeMutation, createUnlikeMutation } = useLike();

  // const { userGameLoading, fetchUserGame } = useUserGameById();
  // const { addLike, removeLike } = useAddRemoveLike();

  // const {
  //   handleAddGameHook,
  //   contextHolder: handGameContextHolder,
  //   handleEditUserGameStatus,
  //   info,
  // } = useAddRemoveGameCustomHook();

  const items = useMemo(
    () =>
      ['Planning', 'Playing', 'Open List Editor'].map((item) => {
        if (item === 'Open List Editor') {
          return (
            <>
              <option
              // onClick={(e) => {
              //   // e.preventDefault();
              //   // fetchUserGame({ variables: { gameId: game.id } });
              //   // setOpen(!open);
              // }}
              // type="text"
              >
                Open List Editor
              </option>
              {/* <ListEditor
              game={game as GameDataType}
              isGameAdded={game.isGameAdded}
              open={open}
              setOpen={setOpen}
              setSelectedGame={setGame}
              userGameLoading={userGameLoading}
            /> */}
            </>
          );
        }

        return (
          <option
            onClick={async () => {
              // await handleEditUserGameStatus(item, game as GameType);
            }}
            // type="text"
          >
            {' '}
            Set as {item}
          </option>
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      open,
      // userGameLoading, game.isGameLiked
    ]
  );

  if (!gameResponse?.data?.data?.getGameById) return;

  const game = gameResponse?.data?.data?.getGameById;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoContent}>
        <div className={styles.infoOverlap}>
          <div className={styles.overlapInner}>
            {game?.imageURL && <img alt={game?.name} className={styles.infoImage} src={game?.imageURL} />}
            <div className={styles.infoActions}>
              <div className={styles.listActions}>
                <button
                  className={styles.add}
                  onClick={async () => {
                    // await handleAddGameHook(game as GameType);
                  }}
                  // type="primary"
                >
                  Add to List
                </button>

                {/* <Dropdown arrow className="dropdown" menu={{ items }} placement="bottomRight" trigger={['click']}>
                  <Button icon={<DownCircleOutlined />} type="primary" />
                </Dropdown> */}
                <select style={{ width: '20px' }}>{items}</select>
              </div>
              <div>
                {/* <Button
                  danger={game.isGameLiked}
                  icon={<HeartOutlined />}
                  onClick={async () => {
                    // if (user.id === '') {
                    //   info(`Please login to add this game to your liked list`);
                    //   return;
                    // }
                    // if (!game.isGameLiked) {
                    //   const response = await addLike(game.id as string, 'Game');
                    //   setGame({ ...(response.like?.likeable as GameType) });
                    //   info(`Game ${game.name} added to your liked list`);
                    // } else {
                    //   const response = await removeLike(game.id as string, 'Game');
                    //   setGame({ ...(response.like?.likeable as GameType) });
                    //   info(`Game ${game.name} removed from your liked list`);
                    // }
                  }}
                  type="primary"
                /> */}
                <button
                  onClick={() => {
                    if (user.email === '') {
                      toast.warn(`Please login to add this game to your liked list`);

                      return;
                    }

                    if (!game.gameLiked) {
                      // const response = await addLike(game.id as string, 'Game');
                      createLikeMutation({ interactiveEntityId: game.id });

                      // setGame({ ...(response.like?.likeable as GameType) });
                      toast(`Game ${game.name} added to your liked list`);
                    } else {
                      createUnlikeMutation({ interactiveEntityId: game.id });
                      // const response = await removeLike(game.id as string, 'Game');

                      // setGame({ ...(response.like?.likeable as GameType) });
                      toast(`Game ${game.name} removed from your liked list`);
                    }
                  }}
                >
                  Icon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoInfo}>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
          <div className={styles.infoInfoTags}>
            <a href="/">Overview</a>
            <a href="/">Reviews</a>
            <a href="/">Related</a>
            <a href="/">Status</a>
            <a href="/">Social</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const GameDetailHeaderInfo = memo(GameDetailHeaderInfoTemp);

export default GameDetailHeaderInfo;
