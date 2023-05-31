import {MagicArea} from './components';

import {NavigationBar} from '../NavigationBar';

import React from 'react';
import {Link} from 'react-router-dom';


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
      <Link
        to='/download'
        className='download-link'>
        Download
      </Link>
    </>
  );
}
