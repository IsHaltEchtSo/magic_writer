import {ItalicButton, BoldButton, UnderlineButton} from './toolbarButtons';
import '../assets/css/toolbar.css';

import React from 'react';


/**
 * The Component that renders the Toolbar for the Textarea of the MagicArea
 *
 * @param {object} prop The prop for textStyles and setTextStyles
 * @param {object} prop.textStyles The object containing data about text styles
 * @param {function} prop.setTextStyles The function to update text styles
 * @return {JSX}
 */
export function Toolbar({textStyles, setTextStyles}) {
  return (
    <div className="toolbar">
      <ItalicButton
        textStyles={textStyles}
        setTextStyles={setTextStyles}
      />
      <BoldButton
        textStyles={textStyles}
        setTextStyles={setTextStyles}
      />
      <UnderlineButton
        textStyles={textStyles}
        setTextStyles={setTextStyles}
      />
    </div>
  );
}
