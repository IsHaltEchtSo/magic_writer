import {MODES} from '../constants';
import {Toolbar} from './toolbar';
import {TextArea} from './textarea';

import React, {useState, useEffect} from 'react';


/**
 * The Component that renders the MagicArea for the WriterPage
 *
 * @return {JSX}
 */
export function MagicArea() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || MODES.EDIT);

  const [textStyles, setTextStyles] = useState({'fontStyle': 'normal',
    'fontWeight': 'normal',
    'textDecoration': 'none'});

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const handleToggleClick = () => {
    if (mode === MODES.EDIT) {
      setMode(MODES.WRITE);
    } else {
      setMode(MODES.EDIT);
    }
  };

  return (
    <>
      <Toolbar textStyles={textStyles}
        setTextStyles={setTextStyles}
      />
      <TextArea textStyles={textStyles}
        mode={mode}
      />
      <button onClick={handleToggleClick}
        data-testid='toggleButton'>
        Toggle
      </button>
    </>
  );
}
