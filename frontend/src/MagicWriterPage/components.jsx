import {MagicAreaMode} from './constants.jsx';
import AsteriskSVG from './assets/icons/asterisk.svg';
import TSVG from './assets/icons/t-alternative.svg';
import './assets/css/styles.css';

import {TextArea} from './Textarea/index.jsx';

import React, {useState, useEffect} from 'react';

/**
 * The Component that renders the MagicArea for the WriterPage
 *
 * @return {JSX}
 */
export function MagicArea() {
  const [magicAreaMode, setMagicAreaMode] = useState(
      localStorage.getItem('magicAreaMode') || MagicAreaMode.EDIT);

  // update the magicAreaMode value in the localStorage
  useEffect(() => {
    localStorage.setItem('magicAreaMode', magicAreaMode);
  }, [magicAreaMode]);

  const toggleMagicAreaMode = () => {
    if (magicAreaMode === MagicAreaMode.EDIT) {
      setMagicAreaMode(MagicAreaMode.WRITE);
    } else if (magicAreaMode === MagicAreaMode.WRITE) {
      setMagicAreaMode(MagicAreaMode.EDIT);
    }
  };

  /**
   * Display the correct Icon for the current state of the MagicArea
   *
   * @return {JSX}
   */
  function displayCorrectToggleIcon() {
    return magicAreaMode === MagicAreaMode.WRITE ?
          <img
            className='toggle-button_icon-text'
            src={TSVG}
            alt='TSVG'/> :
          <img
            className='toggle-button_icon-asterisk'
            src={AsteriskSVG}
            alt='AsteriskSVG'/>;
  };

  return (
    <>
      <button
        className='toggle-button'
        onClick={toggleMagicAreaMode}
        data-testid='toggleButton'>
        {displayCorrectToggleIcon()}
      </button>
      <TextArea
        magicAreaMode={magicAreaMode}
      />
    </>
  );
}
