import { useParams } from 'react-router-dom';

import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';
import GameDetailHeader from '@app/components/GameDetailHeader/GameDetailHeader';
import useGetAGame from '@app/services/game/useGetAGame';

function GameDetail() {
  // const { warning, contextHolder } = useNotification();
  const { id } = useParams();
  const { aCommentData, aCommentDataIsLoading } = useGetAGame({ gameId: id });

  // const {
  //   game: gameFromHook,
  //   getGame,
  //   error: errorFromHook,
  //   getGameFromFragment,
  // } = useGetGameById();
  // THIS SETGAME IS NOT THE SAME AS THE ONE IN THE HOOK. INSTEAD IT IS FOR RETRIEVING THE GAME FROM THE FRAGMENT
  // ALSO TRIGGER RE-RENDERING OF THE COMPONENT WHEN LISTEDITOR IS SET OPEN
  // const [game, setGame] = useState<Game | null>(null);

  // useEffect(() => {
  //   const tempGame: GameType | null = getGameFromFragment(id);

  //   const fetchGame = async () => {
  //     try {
  //       if (tempGame) {
  //         setGame(tempGame);
  //       } else {
  //         await getGame(id);
  //       }
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         warning(error.message);
  //       }
  //     }
  //   };

  //   if (id) {
  //     fetchGame();
  //   }
  // }, [id]);

  // if (
  //   !game
  //   && !gameFromHook
  // ) {
  //   return (
  //     <div>
  //       {/* <div>{errorFromHook?.message}</div> */}
  //       <div>Game not found</div>
  //     </div>
  //   );
  // }
  if (aCommentDataIsLoading || !aCommentData?.data?.data || !id) return <div>Loading...</div>;

  return (
    <ContentWrapper>
      <div>
        <GameDetailHeader gameId={id} />
      </div>
    </ContentWrapper>
  );
}

export default GameDetail;
