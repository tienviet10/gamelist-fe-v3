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
