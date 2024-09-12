import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import NotFoundPage from '../pages/NotFoundPage';

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '*', element: <NotFoundPage /> },
];