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
      { path: overviewRoute, element: <UserProfile routeName={overviewRoute} /> },
      { path: favoriteUserProfileRoute, element: <UserProfile routeName={favoriteUserProfileRoute} /> },
      { path: gameListUserProfileRoute, element: <UserProfile routeName={gameListUserProfileRoute} /> },
      { path: reviewsUserProfileRoute, element: <UserProfile routeName={reviewsUserProfileRoute} /> },
      { path: socialUserProfileRoute, element: <UserProfile routeName={socialUserProfileRoute} /> },
    ],
  },
];
