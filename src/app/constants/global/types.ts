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

export type CommentDTO = {
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

export type CommentDTOResponse = {
  id: number;
  text: string;
  createdAt: string;
  userId: string;
  likes: LikeDTO[];
  comments: CommentDTO[];
};

export type CreateCommentResponse = {
  comment: CommentDTO;
  interactiveEntityId: number;
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

export type OptionalHomeGameFilters = Partial<HomeGameFilters>;

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

export type ListTypes = 'planning' | 'playing' | 'paused' | 'completed' | 'dropped' | 'justAdded';

export type SelectedListTypes = ListTypes | 'all';

export type UserGameFiltersSortType = SharedSortType | 'last_updated' | 'last_added' | 'start_date' | 'completed_date';

export type UserGameFilters = {
  selectedList: SelectedListTypes;
  search: string | undefined;
  genres: string | undefined;
  platforms: string | undefined;
  tags: string | undefined;
  year: number | undefined;
  sortBy: UserGameFiltersSortType | undefined;
};

export type RequiredGameWithIsAdded = RequiredGame & {
  gameAdded?: boolean;
  imageURL?: string;
};

export type ListsOrderType = keyof Omit<
  UserGamesByStatus,
  | 'totalCount'
  | 'listsOrder'
  | 'inactiveCount'
  | 'droppedCount'
  | 'pausedCount'
  | 'completedCount'
  | 'playingCount'
  | 'planningCount'
  | 'justAddedCount'
>;

export type EditUserGameParams = {
  gameId: number;
  gameStatus?: string | null;
  gameNote?: string;
  isPrivate?: boolean;
  rating?: number | null;
  completedDate?: string;
  startDate?: string;
};

export type UserGamesByGameID = {
  id: number;
  gameStatus: string;
  startDate: string;
  completedDate: string;
  isPrivate: boolean;
  rating: number;
  gameNote: string;
  createdAt: string;
  updatedAt: string;
};

export interface DropDownOption {
  value: string | number;
  label: string | number;
  children?: DropDownOption[];
}

export type OnChangeCascaderType = (string | number)[] | string | number;

export declare type ArrayElementType<T> = T extends (infer E)[] ? E : T;

export type OldPostsAndStatusUpdatesDataType = {
  pageParams: number[];
  pages: PostsAndStatusUpdatesPageType[];
};

type PostsAndStatusUpdatesPageType = {
  data: CustomPostStatusResponseType;
};
