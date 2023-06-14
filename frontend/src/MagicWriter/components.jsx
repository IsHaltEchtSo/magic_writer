import {MagicAreaMode, TEXT_STYLES} from './constants.jsx';
import './styles.css';

import {TextArea} from './textarea/index.jsx';
import {Toolbar} from './toolbar/index.jsx';

import React, {useState, useEffect} from 'react';

/**
 * The Component that renders the MagicArea for the WriterPage
 *
 * @return {JSX}
 */
export function MagicArea() {
  const [magicAreaMode, setMagicAreaMode] = useState(
      localStorage.getItem('magicAreaMode') || MagicAreaMode.EDIT);

  const [textStyles, setTextStyles] = useState(TEXT_STYLES);

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

  return (
    <>
      {/* <h1>Magic Writer/Editor</h1>
      <Toolbar
        textStyles={textStyles}
        setTextStyles={setTextStyles}
      /> */}
      <button
        className='toggle-button'
        onClick={toggleMagicAreaMode}
        data-testid='toggleButton'>
        T / *
      </button>
      <TextArea
        textStyles={textStyles}
        magicAreaMode={magicAreaMode}
      />
    </>
  );
}
