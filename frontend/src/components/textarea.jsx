import {
  MODES, SPECIAL_CHARACTERS, TEXTAREA_EVENT_TYPE, MESSAGES,
} from '../constants';

import React, {useState, useEffect} from 'react';

/**
 * This componenet returns the TextArea of the MagicArea
 *
 * @param {Object} prop            - The textStyles and mode of the TextArea
 * @param {object} prop.textStyles - The styles of the text
 * @param {string} prop.mode       - The mode the magicwriter is in
 * @return {JSX}
 */
export function TextArea({textStyles, mode}) {
  const [text, setText] =
    useState(localStorage.getItem('text') || MESSAGES.MAGIC_AREA_NORMAL_TEXT);

  const [selectedText, setSelectedText] = useState('');

  const [cursorPosition, setCursorPosition] = useState({'start': 0, 'end': 0});

  // Update the LocalStorage when the 'text'-State changes
  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  /**
   * Displays the input Text in its asterisked Version
   *
   * @param {string} text The text to be asterisked
   * @return {string}
   */
  function magicallyDisplay(text) {
    let magicText = '';

    for (let i = 0; i < text.length; i++) {
      if (SPECIAL_CHARACTERS.includes(text[i])) {
        magicText += text[i];
      } else {
        magicText += '*';
      }
    }

    return magicText;
  }

  // Updates the currently selected Text
  const handleSelect = () => {
    const textarea = document.getElementById('magic-area');
    const [cursorStart, cursorEnd] =
      [textarea.selectionStart, textarea.selectionEnd];

    setCursorPosition({'start': cursorStart, 'end': cursorEnd});
    setSelectedText(text.substring(cursorStart, cursorEnd));
  };

  const handleChange = (event) => {
    let leftString; let rightString = ['', ''];

    switch (event.nativeEvent.inputType) {
      case TEXTAREA_EVENT_TYPE.INSERT_CHARACTER:
        [leftString, rightString] =
          [text.substring(0, cursorPosition.start),
            text.substring(cursorPosition.end, text.length)];
        const insertedCharacter = event.nativeEvent.data;
        setText(leftString + insertedCharacter + rightString);
        break;
      case TEXTAREA_EVENT_TYPE.DELETE_CHARACTER:
        if (selectedText) {
          leftString = text.substring(0, cursorPosition.start);
          rightString = text.substring(cursorPosition.end, text.length);
          setText(leftString + rightString);
        } else {
          leftString = text.substring(0, cursorPosition.start - 1);
          rightString = text.substring(cursorPosition.end, text.length);
          setText(leftString + rightString);
        }
        break;
      case TEXTAREA_EVENT_TYPE.DELETE_LINE:
        // !! Needs to be implemented
        break;
      case TEXTAREA_EVENT_TYPE.INSERT_LINE:
        [leftString, rightString] =
          [text.substring(0, cursorPosition.start),
            text.substring(cursorPosition.end, text.length)];
        setText(leftString + '\n' + rightString);
        break;
    }
  };

  const handleCut = () => {
    navigator.clipboard
        .writeText(selectedText)
        .then(() => {
          const [leftString, rightString] =
            [text.substring(0, cursorPosition.start),
              text.substring(cursorPosition.end, text.length)];
          setText(leftString + rightString);
        });
  };

  const handlePaste = () => {
    const leftString = text.substring(0, cursorPosition.start);
    const rightString = text.substring(cursorPosition.end, text.length);

    navigator.clipboard
        .readText()
        .then((data) => {
          const additionalText = data;
          setText(leftString + additionalText + rightString);
        });
  };

  if (mode === MODES.EDIT) {
    return (
      <textarea
        className="magic-area"
        id='magic-area'
        data-testid='text-area'
        onInput={handleChange}
        onCut={handleCut}
        onPaste={handlePaste}
        style={{'fontStyle': textStyles.fontStyle,
          'fontWeight': textStyles.fontWeight,
          'textDecoration': textStyles.textDecoration}}
        onSelect={handleSelect}
        value={text}
      />
    );
  } else if (mode === MODES.WRITE) {
    return (
      <textarea
        className="magic-area"
        id='magic-area'
        data-testid='text-area'
        onChange={handleChange}
        value={magicallyDisplay(text)}
        onSelect={handleSelect}
      />
    );
  }
}
