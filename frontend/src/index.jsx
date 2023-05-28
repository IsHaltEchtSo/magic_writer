import {IndexPageContent} from './components/indexpagecontent';
import {NavigationBar} from './components/navbar';

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
