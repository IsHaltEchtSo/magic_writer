import {DownloadPageContent} from './components';

import {NavigationBar} from '../NavigationBar';

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
      <DownloadPageContent />
    </>
  );
}
