import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Layout from '../components/Layout';
import NotFoundPage from '../pages/NotFoundPage';

import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      ...publicRoutes,
      ...protectedRoutes,
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;