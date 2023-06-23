import {LandingPageContent} from './components';

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
      <div className='opacity_container'>
        <LandingPageContent />
      </div>
    </>
  );
}
