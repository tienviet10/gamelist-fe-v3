import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import { publicRoutes } from './publicRoutes';
import { protectedRoutes } from './protectedRoutes';
import NotFoundPage from '../pages/NotFoundPage';

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