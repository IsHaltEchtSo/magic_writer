import '../assets/css/toolbar.css';

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBold, faItalic, faUnderline} from '@fortawesome/free-solid-svg-icons';

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
      <button
        className={`toolbar_button 
          ${textStyles.fontStyle === 'italic' ? 'active' : ''}`}
        onClick={() => {
          const stylesCopy = {...textStyles};
          if (textStyles.fontStyle === 'normal') {
            stylesCopy.fontStyle = 'italic';
            setTextStyles(stylesCopy);
          } else if (textStyles.fontStyle === 'italic') {
            stylesCopy.fontStyle = 'normal';
            setTextStyles(stylesCopy);
          }
        }}
      >
        <FontAwesomeIcon className="toolbar_button-icon" icon={faItalic} />
      </button>

      <button
        className={`toolbar_button 
          ${textStyles.fontWeight === 'bold' ? 'active' : ''}`}
        onClick={() => {
          const stylesCopy = {...textStyles};
          if (textStyles.fontWeight === 'normal') {
            stylesCopy.fontWeight = 'bold';
            setTextStyles(stylesCopy);
          } else if (textStyles.fontWeight === 'bold') {
            stylesCopy.fontWeight = 'normal';
            setTextStyles(stylesCopy);
          }
        }}
      >
        <FontAwesomeIcon className='toolbar_button-icon' icon={faBold} />
      </button>

      <button
        className={`toolbar_button 
          ${textStyles.textDecoration === 'underline' ? 'active' : ''}`}
        onClick={() => {
          const stylesCopy = {...textStyles};
          if (textStyles.textDecoration === 'none') {
            stylesCopy.textDecoration = 'underline';
            setTextStyles(stylesCopy);
          } else if (textStyles.textDecoration === 'underline') {
            stylesCopy.textDecoration = 'none';
            setTextStyles(stylesCopy);
          }
        }}
      >
        <FontAwesomeIcon className='toolbar_button-icon' icon={faUnderline} />
      </button>
    </div>
  );
}
