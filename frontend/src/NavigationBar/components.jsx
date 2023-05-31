import './styles.css';

import {Link} from 'react-router-dom';
import React from 'react';

/**
 * Represents the website's navigation bar.
 * @return {JSX}
 */
export function NavigationBar() {
  return (
    <div className='navigation-bar' data-testid='navigation-bar'>
      <Link
        to='/'
        className='home-link'
        data-testid='home-link'>
        Home
      </Link>
      <Link
        to='/writer'
        className='writer-link'
        data-testid='writer-link'>
        Magic Writer
      </Link>
      <Link
        to='/authentication'
        className='authentication-link'
        data-testid='authentication-link'>
        Authentication
      </Link>
    </div>
  );
}
