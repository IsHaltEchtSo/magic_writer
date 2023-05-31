import {MagicAreaMode, DefaultObject} from './constants.jsx';

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

  const [textStyles, setTextStyles] = useState(DefaultObject.TEXT_STYLES);

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
      <h1>Magic Writer/Editor</h1>
      <Toolbar
        textStyles={textStyles}
        setTextStyles={setTextStyles}
      />
      <TextArea
        textStyles={textStyles}
        magicAreaMode={magicAreaMode}
      />
      <button
        onClick={toggleMagicAreaMode}
        data-testid='toggleButton'>
        Toggle Magic Area Mode
      </button>
    </>
  );
}
