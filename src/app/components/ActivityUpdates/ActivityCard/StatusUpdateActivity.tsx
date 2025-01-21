import type { StatusUpdatesDTOResponse } from '@app/constants/global/types';

import styles from '../ActivitiesUpdates.module.scss';

function StatusUpdateActivity({
  statusUpdate,
  username,
}: {
  statusUpdate: StatusUpdatesDTOResponse;
  username: string;
}) {
  // const { handleAddFollow, contextHolder } = useHandleAddRemoveFollow();
  const name = statusUpdate.userGame.user?.username === username ? 'You' : statusUpdate.userGame.user?.username;
  const verb = name === 'You' ? 'are' : 'is';

  const textGenerator = (statusUpdateInput: StatusUpdatesDTOResponse) => {
    switch (statusUpdateInput.gameStatus) {
      case 'Playing':
        return `${name} ${verb} playing `;
      case 'Completed':
      case 'Dropped':
      case 'Paused':
        return `${name} ${statusUpdateInput.gameStatus.toLowerCase()} `;
      case 'Planning':
        return `${name} ${verb} planning to play `;
      case 'Inactive':
        return `${name} removed `;
      case null:
        return `${name} just added `;
      default:
        return `${name} `;
    }
  };

  return (
    <div className={styles.activityInfo}>
      <a
        aria-label={`${statusUpdate.userGame.game.name}`}
        href={`/game-detail/${statusUpdate.userGame.game.id}/${statusUpdate.userGame.game.name}`}
        style={{
          textIndent: '-9999px',
          backgroundImage: `url(${statusUpdate.userGame.game.imageURL})`,
        }}
      >
        {statusUpdate.userGame.game.name}
      </a>
      <div className={styles.activityInfoText}>
        <div>
          {textGenerator(statusUpdate)}
          <a href={`/game-detail/${statusUpdate.userGame.game.id} / ${statusUpdate.userGame.game.name}`}>
            {statusUpdate.userGame.game.name}
          </a>{' '}
        </div>
        {/* <Avatar
          icon={<UserOutlined />}
          onClick={async () => {
            if (statusUpdate.userGame.user?.username && statusUpdate.userGame.user?.username !== username) {
              await handleAddFollow(statusUpdate.userGame.user);
            }
          }}
          src={statusUpdate.userGame.user?.userPicture}
          style={{
            cursor: `${statusUpdate.userGame.user?.username !== username ? 'pointer' : 'default'}`,
          }}
        /> */}
        <div>Avatar Here</div>
      </div>
    </div>
  );
}

export default StatusUpdateActivity;
