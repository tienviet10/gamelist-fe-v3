import { RouteObject } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from '../pages/UserProfile';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/userProfile',
    element: <ProtectedRoute><UserProfile /></ProtectedRoute>,
  },
];