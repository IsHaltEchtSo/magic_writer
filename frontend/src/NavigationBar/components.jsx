import './css/styles.css';

import {Link} from 'react-router-dom';
import React from 'react';

/**
 * Represents the website's navigation bar.
 * @return {JSX}
 */
export function NavigationBar() {
  const reduceBackgroundOpacity = () => {
    const container = document.getElementsByClassName('opacity_container')[0];
    container.style.opacity = '0.4';
  };

  const restoreBackgroundOpacity = () => {
    const container = document.getElementsByClassName('opacity_container')[0];
    container.style.opacity = '1';
  };

  return (
    <div
      className='navigation-bar_container'
      data-testid='navigation-bar_container'
      onMouseLeave={restoreBackgroundOpacity}>
      <div className='navigation-bar_menu-icon'
        onMouseOver={reduceBackgroundOpacity}> =
      </div>
      <div className='navigation-bar_links-container'>
        <div>
          <Link
            to='/'
            className='navigation-bar_link'
            data-testid='home-link'>Home
          </Link>
        </div>
        <Link
          to='/writer'
          className='navigation-bar_link'
          data-testid='writer-link'>MagicWriter
        </Link>
        <Link
          to='/privacy'
          className='navigation-bar_link'
          data-testid='privacy-link'>Privacy
        </Link>
      </div>
    </div>
  );
}
