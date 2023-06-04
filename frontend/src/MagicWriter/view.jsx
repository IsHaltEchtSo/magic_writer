import {MagicArea} from './components';

import {NavigationBar} from '../NavigationBar';

import React from 'react';


/**
 * The Component that renders the MagicWriter Page
 *
 * @return {JSX}
 */
export function MagicWriterPage() {
  return (
    <>
      <NavigationBar />
      <MagicArea className='writer-area' />
    </>
  );
}
