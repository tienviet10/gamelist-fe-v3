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
