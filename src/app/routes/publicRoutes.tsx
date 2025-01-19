import { RouteObject } from 'react-router-dom';

import HomePage from '@app/pages/HomePage/HomePage';
import LoginPage from '@app/pages/LoginPage';
import NotFoundPage from '@app/pages/NotFoundPage';
import SignUpPage from '@app/pages/SignUpPage';

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/games', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '*', element: <NotFoundPage /> },
];
