import {LandingPageContent} from '../components/landingPageContent';
import {NavigationBar} from '../components/navigationbar';

import React from 'react';


/**
 * The Component that renders the Index Page
 *
 * @return {JSX}
 */
export function LandingPage() {
  return (
    <>
      <NavigationBar />
      <LandingPageContent />
    </>
  );
}
