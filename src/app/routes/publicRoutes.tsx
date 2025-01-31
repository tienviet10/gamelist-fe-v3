import { RouteObject } from 'react-router-dom';

import GameDetail from '@app/pages/GameDetail/GameDetail';
import HomePage from '@app/pages/Home/HomePage';
import LoginPage from '@app/pages/Login/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/games', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  {
    path: '/game-detail',
    children: [
      {
        path: '/game-detail/:id/:name',
        element: <GameDetail />,
      },
    ],
  },
];
