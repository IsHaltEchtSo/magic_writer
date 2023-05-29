import {
  MagicAreaMode, ALWAYS_READABLE_CHARACTERS, TextAreaEventType,
  DefaultText, ASTERISK,
} from '../constants';

import React, {useState, useEffect} from 'react';

/**
 * This componenet returns the TextArea of the MagicArea
 *
 * @param {Object} prop            - The textStyles and mode of the TextArea
 * @param {object} prop.textStyles - The styles of the text
 * @param {string} prop.magicAreaMode       - The mode the magicwriter is in
 * @return {JSX}
 */
export function TextArea({textStyles, magicAreaMode}) {
  const [textAreaText, setTextAreaText] = useState(
      localStorage.getItem('textAreaText') || DefaultText.MAGIC_AREA_READABLE);

  const [selectedText, setSelectedText] = useState('');

  const [cursorPosition, setCursorPosition] = useState({'start': 0, 'end': 0});

  useEffect(() => {
    localStorage.setItem('textAreaText', textAreaText);
  }, [textAreaText]);

  /**
   * Disables the readability of the input text
   * by replacing characters with asterisks
   *
   * @param {string} text The text to be replaced with asterisks
   * @return {string}
   */
  function disableReadability(text) {
    let textWithAsterisks = '';

    for (let i = 0; i < text.length; i++) {
      const currentCharacter = text[i];
      if (ALWAYS_READABLE_CHARACTERS.includes(currentCharacter)) {
        textWithAsterisks += currentCharacter;
      } else {
        textWithAsterisks += ASTERISK;
      }
    }

    return textWithAsterisks;
  }

  /**
   * Updates the currently selected Text
   */
  const handleTextAreaSelection = () => {
    const textArea = document.getElementById('magic-area');
    const [cursorStart, cursorEnd] =
      [textArea.selectionStart, textArea.selectionEnd];

    setCursorPosition({'start': cursorStart, 'end': cursorEnd});
    setSelectedText(textAreaText.substring(cursorStart, cursorEnd));
  };

  /**
   * Splits the text of the textArea at the cursor position
   * into a right and left substring
   *
   * @return {string}
   */
  function splitTextAreaText() {
    const leftString = textAreaText.substring(
        0,
        cursorPosition.start);

    const rightString = textAreaText.substring(
        cursorPosition.end,
        textAreaText.length);

    return [leftString, rightString];
  }

  const handleTextAreaInput = (event) => {
    let leftString = '';
    let rightString = '';

    const textAreaInputEvent = event.nativeEvent.inputType;

    switch (textAreaInputEvent) {
      case TextAreaEventType.INSERT_CHARACTER:
        const insertedCharacter = event.nativeEvent.data;

        [leftString, rightString] = splitTextAreaText();

        setTextAreaText(leftString + insertedCharacter + rightString);

        break;

      case TextAreaEventType.DELETE_CHARACTER:
        if (selectedText) {
          [leftString, rightString] = splitTextAreaText();

          setTextAreaText(leftString + rightString);
        } else {
          const [leftString, rightString] = splitTextAreaText();
          const shortenedLeftString = leftString.substring(
              0,
              leftString.length - 1);

          setTextAreaText(shortenedLeftString + rightString);
        }

        break;

      case TextAreaEventType.DELETE_LINE:
        // !! Needs to be implemented
        break;

      case TextAreaEventType.INSERT_LINE:
        [leftString, rightString] = splitTextAreaText();

        setTextAreaText(leftString + '\n' + rightString);

        break;
    }
  };

  const handleCutCommand = () => {
    const [leftString, rightString] = splitTextAreaText();

    navigator.clipboard
        .writeText(selectedText)
        .then(() => {
          setTextAreaText(leftString + rightString);
        });
  };

  const handlePasteCommand = () => {
    const [leftString, rightString] = splitTextAreaText();

    navigator.clipboard
        .readText()
        .then((pastedText) => {
          setTextAreaText(leftString + pastedText + rightString);
        });
  };

  /**
   * Returns the text of the textArea in a readable or unreadable format
   * depening on the Mode of MagicArea
   *
   * @return {string}
   */
  function readableOrUnreadableText() {
    return magicAreaMode === MagicAreaMode.EDIT ?
        textAreaText : disableReadability(textAreaText);
  }

  return (
    <textarea
      className="magic-area"
      id='magic-area'
      data-testid='text-area'
      onChange={handleTextAreaInput}
      onCut={handleCutCommand}
      onPaste={handlePasteCommand}
      style={{
        'fontStyle': textStyles.fontStyle,
        'fontWeight': textStyles.fontWeight,
        'textDecoration': textStyles.textDecoration}}
      onSelect={handleTextAreaSelection}
      value={readableOrUnreadableText()}
    />
  );
}
