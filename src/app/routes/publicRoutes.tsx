import { RouteObject } from 'react-router-dom';

import HomePage from '@app/pages/Home/HomePage';
import LoginPage from '@app/pages/Login/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/games', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
];
