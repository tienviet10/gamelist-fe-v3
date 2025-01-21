import { useState } from 'react';

import { RequiredGameWithIsAdded } from '@app/constants/global/types';
import useGetUserGameState from '@app/pages/UserProfile/ProfileContent/UserGameList/useGetUserGameState';

import type { GameDataType, UserGameListDataType } from '../types';

import styles from './UserGameListDesktop.module.scss';

function UserGameListDesktop({ data }: UserGameListDataType) {
  const [open, setOpen] = useState<boolean>(false);
  const [chosenGame, setChosenGame] = useState<RequiredGameWithIsAdded | undefined | GameDataType>();
  const { userGameDataIsLoading } = useGetUserGameState(chosenGame?.id);

  const handleClick = (game: GameDataType) => {
    setChosenGame(game);
    setOpen(true);
  };

  // const columns: ColumnsType<GameDataType> = [
  //   {
  //     title: '',
  //     dataIndex: 'imageURL',
  //     width: 80,
  //     render: (imageURL: string, record) => (
  //       <Popover
  //         className={styles.PopElement}
  //         content={<img alt="game-large" className={styles.ImagePop} src={imageURL} />}
  //         overlayInnerStyle={{
  //           backgroundColor: 'transparent',
  //           boxShadow: 'none',
  //         }}
  //         placement="left"
  //       >
  //         <button className={styles.popButton} onClick={() => handleClick(record)} type="button">
  //           <img alt="game" className={styles.Image} src={imageURL} />
  //         </button>
  //       </Popover>
  //     ),
  //   },
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     width: 300,
  //     sorter: {
  //       compare: (a, b) => a.name.localeCompare(b.name),
  //       multiple: 3,
  //     },
  //     render: (name: string, record) => (
  //       <Link className={styles.nameContainer} to={`/game-detail/${record.id}/${name}`}>
  //         {name}
  //       </Link>
  //     ),
  //   },
  //   {
  //     title: 'Score',
  //     dataIndex: 'avgScore',
  //     width: 100,
  //     sorter: {
  //       compare: (a, b) => (a as { avgScore: number }).avgScore - (b as { avgScore: number }).avgScore,
  //       multiple: 3,
  //     },
  //   },
  //   {
  //     title: 'Platforms',
  //     dataIndex: 'platforms',
  //     width: 300,
  //     render: (platforms: string[]) => (
  //       <div className={styles.TagsContainer}>
  //         {platforms.map((platform: string) => (
  //           <CustomTag key={platform} text={platform} />
  //         ))}
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <>
      Hi
      {/* <Table className={styles.Table} columns={columns} dataSource={data} /> */}
      {/* <ListEditor
        isGameAdded={chosenGame?.gameAdded}
        userGameLoading={userGameDataIsLoading}
        open={open}
        setOpen={setOpen}
        game={chosenGame as GameDataType}
        setSelectedGame={setChosenGame}
      /> */}
    </>
  );
}

export default UserGameListDesktop;
