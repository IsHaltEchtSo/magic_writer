import {TextAreaMode} from './constants.jsx';
import './assets/css/styles.css';

import {TextArea} from './Textarea/index.jsx';
import {ToggleButton} from './ToggleButton/index.jsx';

import React, {useState} from 'react';

/**
 * The main component of the MagicWriter;
 * handles state of the textArea and imports the other components
 *
 * @return {JSX}
 */
export function MagicWriter() {
  const [textAreaMode, setTextAreaMode] = useState(
      localStorage.getItem('textAreaMode') || TextAreaMode.EDIT);

  return (
    <>
      <div className='magic-writer_container'>
        <ToggleButton
          textAreaMode={textAreaMode}
          setTextAreaMode={setTextAreaMode}/>
        <TextArea textAreaMode={textAreaMode}/>
      </div>
    </>
  );
}
