import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from '@app/app';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
