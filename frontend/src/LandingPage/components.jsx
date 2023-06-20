import './assets/css/styles.css';
import StartWritingSVG from './assets/icons/start-writing-button.svg';

import React from 'react';
import {Link} from 'react-router-dom';


/**
 * The Component that renders the Content of the Index Page
 *
 * @return {JSX}
 */
export function LandingPageContent() {
  return (
    <>
      <div className='landing-page-container'>
        <h1>MagicWriter</h1>

        <p>helps you write comments, essays and all kinds of text</p>
        <p className='emphasis'>- without distraction from your own words</p>

        <Link
          to='/writer'
          data-testid='writer-link-container'>
          <img
            className='start-writing-icon'
            src={StartWritingSVG}
            alt="StartWritingSVG" />
        </Link>
      </div>
    </>
  );
}
