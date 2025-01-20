import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ContextWrapper from 'src/ContextWrapper';

import router from '@app/routes';

import AuthWrapper from './AuthWrapper';

import 'react-toastify/dist/ReactToastify.css';
import './app.module.scss';

export function App() {
  return (
    <ContextWrapper>
      <ToastContainer />
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </ContextWrapper>
  );
}

export default App;

// <div>
// <Login />
// <SignUp />
// <NxWelcome title="gamelist-fe" />
// </div>
