import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';
import InView from '@app/components/IntersectionObserverView/IntersectionObserverView';
import useAllGames from '@app/services/game/useAllGames';
import { Card } from '@lib/Card/Card';

function HomePage() {
  const { data, fetchNextPage } = useAllGames();

  return (
    <ContentWrapper>
      {data?.pages.map((page) => (
        <div>
          {page.data.data.games.map((game) => (
            <Card key={game.id}>
              <h2>{game.name}</h2>
              <p>{game.description}</p>
            </Card>
          ))}
        </div>
      ))}
      <InView onChange={fetchNextPage} />
    </ContentWrapper>
  );
}

export default HomePage;
