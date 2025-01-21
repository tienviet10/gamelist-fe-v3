import { AxiosError, AxiosResponse } from 'axios';

type ErrorDetails = {
  timestamp: string;
  message: string;
  details: string;
};

interface SpringErrorResponse extends AxiosResponse {
  data: ErrorDetails;
}

export interface ErrorResponse extends AxiosError {
  response: SpringErrorResponse;
}

interface GeneralResponse {
  message: string;
  statusCode: number;
  status: string;
  timestamp: string;
}

export interface CustomAxiosResponse<T> extends AxiosResponse {
  data: GeneralResponse & {
    data: T;
  };
}

export interface UserData {
  email: string;
  username: string;
  userPicture: string;
  bannerPicture: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  bannerURL?: string;
  imageURL?: string;
  genres: string[];
  platforms: string[];
  tags: string[];
  avgScore?: number;
  totalRating?: number;
  releaseDate: Date;
  gameLiked: boolean;
  gameAdded: boolean;
};

export type RequiredGame = Required<Game>;

export type UserGamesByStatus = {
  playing: RequiredGame[];
  playingCount: number;
  completed: RequiredGame[];
  completedCount: number;
  paused: RequiredGame[];
  pausedCount: number;
  planning: RequiredGame[];
  planningCount: number;
  dropped: RequiredGame[];
  droppedCount: number;
  justAdded: RequiredGame[];
  justAddedCount: number;
  totalCount: number;
  listsOrder: string;
};

export type UserBasicDTO = {
  id: number;
  username: string;
  userPicture: string;
  bannerPicture: string;
};

export type LikeDTO = {
  id: number;
  user: UserBasicDTO;
  updatedAt: string;
  createdAt: string;
};

type CommentDTO = {
  id: number;
  text: string;
  createdAt: string;
  user: UserBasicDTO;
  likes: LikeDTO[];
  comments: CommentDTO[];
};

export type PostsDTOResponse = {
  id: number;
  text: string;
  createdAt: string;
  user: UserBasicDTO;
  likes: LikeDTO[];
  comments: CommentDTO[];
};

type GameBasicDTO = {
  id: number;
  name: string;
  imageURL: string;
  bannerURL: string;
};

type UserGameBasicDTO = {
  id: number;
  game: GameBasicDTO;
  user: UserBasicDTO;
};

export type StatusUpdatesDTOResponse = {
  id: number;
  gameStatus: string;
  createdAt: string;
  userGame: UserGameBasicDTO;
  likes: LikeDTO[];
  comments: CommentDTO[];
};

export type PostsAndStatusUpdatesData = {
  posts: PostsDTOResponse[];
  statusUpdates: StatusUpdatesDTOResponse[];
  lastPostOrStatusUpdateId: number;
};

export type CustomPostStatusResponseType = {
  postsAndStatusUpdates: PostsAndStatusUpdatesData;
};

export type PostStatusResponseType = CustomAxiosResponse<CustomPostStatusResponseType>;

export type SharedSortType = 'name' | 'avg_score' | 'newest_releases' | 'oldest_releases';

export type GameFiltersSortType = SharedSortType | 'total_rating';

export type Games = {
  games: Game[];
};

export type HomeGameFilters = {
  search: string | undefined;
  genres: {
    included: string[];
    excluded: string[];
  };
  platforms: {
    included: string[];
    excluded: string[];
  };
  tags: {
    included: string[];
    excluded: string[];
  };
  year: number | undefined;
  sortBy: GameFiltersSortType | undefined;
};

export type InitialStateType = {
  loading: boolean;
  user: UserData;
};

export type UserInfo = {
  id: string;
  username: string;
  bannerPicture: string;
  createdAt: string;
  games: string[];
  isActive: boolean;
  userGames: string[];
  userPicture: string;
  __typename: string;
};

export type UserGamesType = {
  userGamesByStatus: UserGamesByStatus;
};
