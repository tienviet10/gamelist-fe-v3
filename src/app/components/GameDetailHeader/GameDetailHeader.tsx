import GameDetailHeaderBanner from './GameDetailHeaderBanner/GameDetailHeaderBanner';
import GameDetailHeaderInfo from './GameDetailHeaderInfo/GameDetailHeaderInfo';

function GameDetailHeader({ gameId }: { gameId: string }) {
  return (
    <div>
      <GameDetailHeaderBanner gameId={gameId} />
      <GameDetailHeaderInfo gameId={gameId} />
    </div>
  );
}

export default GameDetailHeader;
