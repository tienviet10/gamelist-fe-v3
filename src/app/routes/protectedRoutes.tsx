import { RouteObject } from 'react-router-dom';

import UserProfile from '../pages/UserProfile/UserProfile';

import ProtectedRoute from './ProtectedRoute';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/userProfile',
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },
];
