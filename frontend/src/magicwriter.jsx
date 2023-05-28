import {NavigationBar} from './components/navbar';
import {MagicArea} from './components/magicarea';

import {Link} from 'react-router-dom';
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
      <h1>Magic Writer/Editor</h1>
      <MagicArea className='writer-area' />
      <Link to='/download' className='download-link'>Download</Link>
    </>
  );
}
