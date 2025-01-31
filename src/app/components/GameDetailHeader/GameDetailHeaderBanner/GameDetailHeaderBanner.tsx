import { useQueryClient } from '@tanstack/react-query';

import type { CustomAGameResponse } from '@app/constants/global/types';

import styles from './GameDetailHeaderBanner.module.scss';

function GameDetailHeaderBanner({ gameId }: { gameId: string }) {
  const queryClient = useQueryClient();
  const gameResponse: CustomAGameResponse | undefined = queryClient.getQueryData(['game', gameId]);

  if (!gameResponse?.data?.data?.getGameById) return;

  return (
    <div
      className={styles.banner}
      role="banner"
      style={{
        backgroundImage: `url(${gameResponse.data.data.getGameById.bannerURL})`,
      }}
    >
      <div className={styles.shadow} />
    </div>
  );
}

export default GameDetailHeaderBanner;
