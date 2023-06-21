import './assets/css/styles.css';

import {LandingPage} from '../LandingPage';
import {MagicWriterPage} from '../MagicWriterPage';
import {PrivacyPolicyPage} from '../PrivacyPolicyPage';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';

/**
 * Returns the Application with React-Router-Dom routing
 *
 * @return {JSX}
 */
export function Application() {
  return (
    <>
      <RouterProvider router={APPLICATION_ROUTER} />
      <Analytics />
    </>
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
  {
    path: '/privacy',
    element: <PrivacyPolicyPage />,
  },
]);
