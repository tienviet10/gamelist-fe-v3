import { RouteObject } from 'react-router-dom';

import {
  favoriteUserProfileRoute,
  gameListUserProfileRoute,
  overviewRoute,
  reviewsUserProfileRoute,
  socialUserProfileRoute,
  userProfileRoute,
} from '@app/constants/global/urls';

import UserProfile from '../pages/UserProfile/UserProfile';

import ProtectedRoute from './ProtectedRoute';

export const protectedRoutes: RouteObject[] = [
  {
    path: `${userProfileRoute}`,
    element: <ProtectedRoute />,
    children: [
      { path: overviewRoute, element: <UserProfile /> },
      { path: favoriteUserProfileRoute, element: <UserProfile /> },
      { path: gameListUserProfileRoute, element: <UserProfile /> },
      { path: reviewsUserProfileRoute, element: <UserProfile /> },
      { path: socialUserProfileRoute, element: <UserProfile /> },
    ],
  },
];
