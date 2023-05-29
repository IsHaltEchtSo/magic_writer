import {AuthenticationPage} from './pages/authenticationpage';
import {DownloadPage} from './pages/downloadpage';
import {LandingPage} from './pages/landingpage';
import {MagicWriterPage} from './pages/magicwriterpage';
import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
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
    .render(<React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    );
