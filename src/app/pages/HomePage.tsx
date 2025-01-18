import { useCallback } from 'react';

import ContentWrapper from '@app/components/ContentWrapper/ContentWrapper';
import InView from '@app/components/IntersectionObserverView/IntersectionObserverView';
import useAllGames from '@app/services/game/useAllGames';
import { Card } from '@lib/Card/Card';

function HomePage() {
  const { data, fetchNextPage } = useAllGames();

  const fetchNext = useCallback(() => {
    if (!fetchNextPage) return;

    fetchNextPage();
  }, [fetchNextPage]);

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
