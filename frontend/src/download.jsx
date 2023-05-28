import {Download} from './components/downloadcontent';
import {NavigationBar} from './components/navbar';

import React from 'react';


/**
 * The Component that renders the Download Page
 *
 * @return {JSX}
 */
export function DownloadPage() {
  return (
    <>
      <NavigationBar />
      <Download />
    </>
  );
}
