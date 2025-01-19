import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';
import InView from '@app/components/IntersectionObserverView/IntersectionObserverView';
import useGetAllGamesWithFilter from '@app/pages/HomePage/useGetAllGamesWithFilter';
import { Card } from '@lib/Card/Card';

function HomePage() {
  const { data, fetchNext } = useGetAllGamesWithFilter();

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
      <InView onChange={fetchNext} />
    </ContentWrapper>
  );
}

export default HomePage;
