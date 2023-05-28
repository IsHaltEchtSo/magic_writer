import {Link} from 'react-router-dom';
import React from 'react';

/**
 * Represents the website's navigation bar.
 * @constructor
 */
export function NavigationBar() {
  return (
    <div className='navbar'>
      <Link
        to='/'
        className='home-link'
      >
        Home
      </Link>
      <Link
        to='/writer'
        className='writer-link'
      >
        Magic Writer
      </Link>
      <Link
        to='/authentication'
        className='authentication-link'
      >
        Authentication
      </Link>
    </div>
  );
}
