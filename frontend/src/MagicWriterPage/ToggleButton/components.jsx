import AsteriskSVG from './assets/icons/asterisk.svg';
import TSVG from './assets/icons/t-alternative.svg';
import './assets/css/styles.css';

import {TextAreaMode} from '../constants.jsx';

import React, {useEffect} from 'react';

/**
 * Renders a button that toggles the 'textAreaMode' of MagicWriter component
 * @return {JSX}
 */
export function ToggleButton({textAreaMode, setTextAreaMode}) {
  // update the magicAreaMode value in the localStorage
  useEffect(() => {
    localStorage.setItem('textAreaMode', textAreaMode);
  }, [textAreaMode]);

  const toggleTextAreaMode = () => {
    if (textAreaMode === TextAreaMode.EDIT) {
      setTextAreaMode(TextAreaMode.WRITE);
    } else if (textAreaMode === TextAreaMode.WRITE) {
      setTextAreaMode(TextAreaMode.EDIT);
    }
  };

  /**
   * Display the correct Icon for the current state of the MagicArea
   *
   * @return {JSX}
   */
  function displayCorrectToggleIcon() {
    return textAreaMode === TextAreaMode.WRITE ?
          <img
            className='magic-writer_icon-text'
            src={TSVG}
            alt='TSVG'/> :
          <img
            className='magic-writer_icon-asterisk'
            src={AsteriskSVG}
            alt='AsteriskSVG'/>;
  };

  return (
    <button
      className='magic-writer_button'
      onClick={toggleTextAreaMode}
      data-testid='toggleButton'>
      {displayCorrectToggleIcon()}
    </button>
  );
}
