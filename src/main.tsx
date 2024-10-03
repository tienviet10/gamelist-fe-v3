import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import router from '@app/routes';

import ContextWrapper from './ContextWrapper';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ContextWrapper>
      <ToastContainer />
      <RouterProvider router={router} />
    </ContextWrapper>
  </StrictMode>
);
