import {LandingPage} from './LandingPage';
import {MagicWriterPage} from './MagicWriter';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';

/**
 * Returns the Application with React-Router-Dom routing
 *
 * @return {JSX}
 */
export function Application() {
  return (
    <RouterProvider router={APPLICATION_ROUTER} />
  );
}

const APPLICATION_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/writer',
    element: <MagicWriterPage />,
  },
]);
