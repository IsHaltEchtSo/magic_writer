import {ToolbarButtonStatus} from './constants.jsx';
import './styles.css';

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

/**
 * Renders the Italic Button for the Toolbar of the MagicArea
 * and updates the fontStyle to be normal or italic
 * @param {object} prop The prop for textStyles and setTextStyles
 * @param {object} prop.textStyles The object containing data about text styles
 * @param {function} prop.setTextStyles The function to update text styles
 * @return {JSX}
 */
export function ItalicButton({textStyles, setTextStyles}) {
  /**
   * Returns a string of 'activated' or 'deactivated'
   * depending whether the fontStyle is italic or not
   * @return {string}
   */
  function fontStyleStatus() {
    return textStyles.fontStyle === 'italic' ?
      ToolbarButtonStatus.ACTIVATED : ToolbarButtonStatus.DEACTIVATED;
  }

  const toggleFontStyle = () => {
    const textStylesCopy = {...textStyles};

    if (textStyles.fontStyle === 'normal') {
      textStylesCopy.fontStyle = 'italic';

      setTextStyles(textStylesCopy);
    } else if (textStyles.fontStyle === 'italic') {
      textStylesCopy.fontStyle = 'normal';

      setTextStyles(textStylesCopy);
    }
  };

  return (
    <button
      className={
        `toolbar_button ${fontStyleStatus()}`}
      onClick={toggleFontStyle}
      data-testid='italic-button'>
      <FontAwesomeIcon
        className="toolbar_button-icon"
        icon={faItalic}
      />
    </button>
  );
}

/**
 * Renders the Bold Button for the Toolbar of the MagicArea
 * and updates the fontWeight to be normal or bold
 * @param {object} prop The prop for textStyles and setTextStyles
 * @param {object} prop.textStyles The object containing data about text styles
 * @param {function} prop.setTextStyles The function to update text styles
 * @return {JSX}
 */
export function BoldButton({textStyles, setTextStyles}) {
  /**
   * Returns a string of 'activated' or 'deactivated'
   * depending whether the fontStyle is italic or not
   * @return {string}
   */
  function fontWeightStatus() {
    return textStyles.fontWeight === 'bold' ?
      ToolbarButtonStatus.ACTIVATED : ToolbarButtonStatus.DEACTIVATED;
  }

  const toggleFontWeight = () => {
    const textStylesCopy = {...textStyles};

    if (textStyles.fontWeight === 'normal') {
      textStylesCopy.fontWeight = 'bold';

      setTextStyles(textStylesCopy);
    } else if (textStyles.fontWeight === 'bold') {
      textStylesCopy.fontWeight = 'normal';

      setTextStyles(textStylesCopy);
    }
  };

  return (
    <button
      className={
        `toolbar_button ${fontWeightStatus()}`}
      onClick={toggleFontWeight}
      data-testid='bold-button'>
      <FontAwesomeIcon
        className='toolbar_button-icon'
        icon={faBold}
      />
    </button>
  );
}

/**
  * Renders the Underline Button for the Toolbar of the MagicArea
  * and updates the textDecoration to be none or underline
  * @param {object} prop The prop for textStyles and setTextStyles
  * @param {object} prop.textStyles The object containing data about text styles
  * @param {function} prop.setTextStyles The function to update text styles
  * @return {JSX}
  */
export function UnderlineButton({textStyles, setTextStyles}) {
  /**
   * Returns a string of 'activated' or 'deactivated'
   * depending whether the fontStyle is italic or not
   * @return {string}
   */
  function textDecorationStatus() {
    return textStyles.textDecoration === 'underline' ?
      ToolbarButtonStatus.ACTIVATED : ToolbarButtonStatus.DEACTIVATED;
  }

  const toggleTextDecoration = () => {
    const textStylesCopy = {...textStyles};

    if (textStyles.textDecoration === 'none') {
      textStylesCopy.textDecoration = 'underline';
      setTextStyles(textStylesCopy);
    } else if (textStyles.textDecoration === 'underline') {
      textStylesCopy.textDecoration = 'none';
      setTextStyles(textStylesCopy);
    }
  };

  return (
    <button
      className={
        `toolbar_button ${textDecorationStatus()}`}
      onClick={toggleTextDecoration}
      data-testid='underline-button'>
      <FontAwesomeIcon
        className='toolbar_button-icon'
        icon={faUnderline}
      />
    </button>
  );
}

