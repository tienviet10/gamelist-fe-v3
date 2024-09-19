import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from '@app/routes';

import ContextWrapper from './ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ContextWrapper>
      <ToastContainer />
      <RouterProvider router={router} />
    </ContextWrapper>
  </StrictMode>
);
