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

/**
 * The Component that handles downloading your written text
 * @return {JSX}
 */
export function DownloadPageContent() {
  return (
    <>
      <h1>Your download is starting...</h1>
    </>
  );
}
