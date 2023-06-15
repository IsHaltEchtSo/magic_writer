import {MagicAreaMode} from './constants.jsx';
import './styles.css';

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

  return (
    <>
      <button
        className='toggle-button'
        onClick={toggleMagicAreaMode}
        data-testid='toggleButton'>
        {magicAreaMode === MagicAreaMode.EDIT ? '*' : 'T'}
      </button>
      <TextArea
        magicAreaMode={magicAreaMode}
      />
    </>
  );
}
