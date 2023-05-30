import {NavigationBar} from '../NavigationBar';

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

/**
 * The Component that renders the Content of the Index Page
 *
 * @return {JSX}
 */
export function LandingPageContent() {
  return (
    <>
      <h1>Landing Page</h1>
      <p>This is where stuff about the Magic Writer would be written.</p>
      <p>And there would be pictures. Ohhh, beautiful pictures! </p>
    </>
  );
}