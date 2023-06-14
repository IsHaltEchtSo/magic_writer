import './styles.css';

import {Link} from 'react-router-dom';
import React from 'react';

/**
 * Represents the website's navigation bar.
 * @return {JSX}
 */
export function NavigationBar() {
  return (
    <div
      className='navigation-bar_container'
      data-testid='navigation-bar_container'>
      <div className='navigation-bar_menu-icon'> =
      </div>
      <div className='navigation-bar_links-container'>
        <Link
          to='/'
          className='home-link'
          data-testid='home-link'>Home
        </Link>
        <Link
          to='/writer'
          className='writer-link'
          data-testid='writer-link'>Magic Writer
        </Link>
      </div>
    </div>
  );
}
