import { CustomAxiosResponse, ErrorResponse } from '@app/constants/global/types';
import { gameFiltersRoute } from '@app/constants/global/urls';
import client from '@app/utils/authApi';
import { useQuery } from '@tanstack/react-query';

const nullGenresPlatformsTagsFurthestYear = {
  genres: null,
  platforms: null,
  tags: null,
  furthestYear: null,
};

type NullGenresPlatformsTagsFurthestYearType = typeof nullGenresPlatformsTagsFurthestYear;

export type GameFilters = {
  genres: string[];
  platforms: string[];
  tags: string[];
  furthestYear: number;
};

type GetFiltersHook =
  | (NullGenresPlatformsTagsFurthestYearType & {
      status: 'loading';
      error: null;
    })
  | (GameFilters & {
      status: 'success';
      error: null;
    })
  | (NullGenresPlatformsTagsFurthestYearType & {
      status: 'error';
      error: ErrorResponse;
    });

type GameFiltersResponse = {
  gameFilters: GameFilters;
};

export default function useGetFilters(): GetFiltersHook {
  const { data, status, error } = useQuery<CustomAxiosResponse<GameFiltersResponse>, ErrorResponse>({
    queryKey: ['GameFilters'],
    queryFn: () => client.get(gameFiltersRoute),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (status === 'pending') {
    return {
      status: 'loading',
      ...nullGenresPlatformsTagsFurthestYear,
      error: null,
    };
  }

  if (status === 'error') {
    return {
      status: 'error',
      ...nullGenresPlatformsTagsFurthestYear,
      error,
    };
  }

  return {
    status: 'success',
    genres: data.data.data.gameFilters.genres,
    platforms: data.data.data.gameFilters.platforms,
    tags: data.data.data.gameFilters.tags,
    furthestYear: data.data.data.gameFilters.furthestYear,
    error: null,
  };
}
