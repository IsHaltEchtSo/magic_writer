import {IndexPageContent} from './components/indexpagecontent';
import {NavigationBar} from './components/navigationbar';

import React from 'react';


/**
 * The Component that renders the Index Page
 *
 * @return {JSX}
 */
export function IndexPage() {
  return (
    <>
      <NavigationBar />
      <IndexPageContent />
    </>
  );
}
