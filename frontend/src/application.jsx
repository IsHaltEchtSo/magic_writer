import {AuthenticationPage} from './pages/authenticationPage';
import {DownloadPage} from './pages/downloadPage';
import {LandingPage} from './pages/landingPage';
import {MagicWriterPage} from './pages/magicWriterPage';
import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const APPLICATION_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/authentication',
    element: <AuthenticationPage />,
  },
  {
    path: '/download',
    element: <DownloadPage />,
  },
  {
    path: '/writer',
    element: <MagicWriterPage />,
  },
]);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
          <RouterProvider router={APPLICATION_ROUTER} />
        </React.StrictMode>,
    );
