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
      <div className='content_container'>
        <h1 className='content_header'>MagicWriter</h1>

        <p className='content_paragraph'>
          helps you write comments, essays and all kinds of text
        </p>
        <p className='content_paragraph-emphasis'>
          - without distraction from your own words
        </p>

        <Link
          to='/writer'
          data-testid='writer-link-container'>
          <img
            className='content_image-writer-link'
            src={StartWritingSVG}
            alt="StartWritingSVG" />
        </Link>
      </div>
    </>
  );
}
