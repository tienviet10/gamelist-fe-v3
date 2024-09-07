import { useMutation } from '@tanstack/react-query';
import client from '@app/utils/authApi';
import { CustomAxiosResponse, ErrorResponse, UserData } from '@app/constants/global/types';
import { loginRoute, registerRoute } from '@app/constants/global/urls';

type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: UserData;
};

type SignUpParams = {
  username: string;
  email: string;
  password: string;
};

export const useAuth = () => {
  const loginUser = async (params: LoginParams): Promise<CustomAxiosResponse<LoginResponse>> =>
    client.post(loginRoute, params);

  const signUpUser = async (params: SignUpParams): Promise<CustomAxiosResponse<LoginResponse>> =>
    client.post(registerRoute, params);

  const {
    mutate: signInMutation,
    data: signInResponse,
    error: signInError,
    isError: signInIsError,
  } = useMutation<CustomAxiosResponse<LoginResponse>, ErrorResponse, LoginParams>({
    mutationFn: loginUser,
  });

  const {
    mutate: signUpMutation,
    data: signUpResponse,
    error: signUpError,
    isError: signUpIsError,
  } = useMutation<CustomAxiosResponse<LoginResponse>, ErrorResponse, SignUpParams>({ mutationFn: signUpUser });

  return {
    signInMutation,
    signInResponse,
    signInError,
    signInIsError,
    signUpMutation,
    signUpResponse,
    signUpError,
    signUpIsError,
  };
};
