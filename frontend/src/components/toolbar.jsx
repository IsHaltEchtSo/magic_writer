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
        className={
          `toolbar_button ${textStyles.fontStyle === 'italic' ?
          'activated' : 'deactivated'}`}
        onClick={() => {
          const textStylesCopy = {...textStyles};
          if (textStyles.fontStyle === 'normal') {
            textStylesCopy.fontStyle = 'italic';
            setTextStyles(textStylesCopy);
          } else if (textStyles.fontStyle === 'italic') {
            textStylesCopy.fontStyle = 'normal';
            setTextStyles(textStylesCopy);
          }
        }}>
        <FontAwesomeIcon
          className="toolbar_button-icon"
          icon={faItalic}
        />
      </button>

      <button
        className={
          `toolbar_button ${textStyles.fontWeight === 'bold' ?
          'activated' : 'deactivated'}`}
        onClick={() => {
          const textStylesCopy = {...textStyles};
          if (textStyles.fontWeight === 'normal') {
            textStylesCopy.fontWeight = 'bold';
            setTextStyles(textStylesCopy);
          } else if (textStyles.fontWeight === 'bold') {
            textStylesCopy.fontWeight = 'normal';
            setTextStyles(textStylesCopy);
          }
        }}>
        <FontAwesomeIcon
          className='toolbar_button-icon'
          icon={faBold}
        />
      </button>

      <button
        className={
          `toolbar_button ${textStyles.textDecoration === 'underline' ?
          'activated' : 'deactivated'}`}
        onClick={() => {
          const textStylesCopy = {...textStyles};
          if (textStyles.textDecoration === 'none') {
            textStylesCopy.textDecoration = 'underline';
            setTextStyles(textStylesCopy);
          } else if (textStyles.textDecoration === 'underline') {
            textStylesCopy.textDecoration = 'none';
            setTextStyles(textStylesCopy);
          }
        }}>
        <FontAwesomeIcon
          className='toolbar_button-icon'
          icon={faUnderline}
        />
      </button>
    </div>
  );
}
