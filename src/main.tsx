import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@app/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
