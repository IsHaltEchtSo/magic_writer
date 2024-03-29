import {ALWAYS_READABLE_CHARACTERS, TextAreaEventType, DefaultText, ASTERISK} from './constants.jsx';
import './css/styles.css';

import {TextAreaMode} from '../constants.jsx';

import React, {useState, useEffect} from 'react';

/**
 * This componenet returns the TextArea of the MagicArea
 *
 * @param {Object} prop            - mode of the TextArea
 * @param {string} prop.textAreaMode       - The mode the magicwriter is in
 * @return {JSX}
 */
export function TextArea({textAreaMode}) {
  const [textAreaText, setTextAreaText] = useState(
      localStorage.getItem('textAreaText') || DefaultText.WELCOME_INSTRUCTIONS);

  const [selectedText, setSelectedText] = useState('');

  const [cursorPosition, setCursorPosition] = useState({'start': 0, 'end': 0});

  // update the textAreaText value of the localStorage
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

    // mask the text with asterisks
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

  const updateSelectedText = () => {
    const textArea = document.getElementById('magic-writer_textarea');
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
    // !! find a better name for this function
    // !! maybe outsource to utils and accept input text string
    return textAreaMode === TextAreaMode.EDIT ?
        textAreaText : disableReadability(textAreaText);
  }

  return (
    <textarea
      autoFocus
      spellCheck='false'

      className="magic-writer_textarea"
      id="magic-writer_textarea"
      data-testid='text-area'

      onChange={handleTextAreaInput}
      onCut={handleCutCommand}
      onPaste={handlePasteCommand}
      onSelect={updateSelectedText}
      value={readableOrUnreadableText()}
    />
  );
}
