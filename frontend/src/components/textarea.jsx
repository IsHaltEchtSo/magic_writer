import { modes, specialCharacters, eventTypes } from '../constants'

import { useState, useEffect } from 'react'



export default function TextArea({ textStyles, mode }) {
  const [text, setText] = useState(localStorage.getItem('text') || 'This is where you start your journey!')
  const [selectedText, setSelectedText] = useState('')
  const [cursorPosition, setCursorPosition] = useState({'start': 0, 
                                                        'end': 0 })

  // Update the LocalStorage when the 'text'-State changes
  useEffect(() => {
    localStorage.setItem('text', text)
  }, [text])

  // Displays the input Text in its asterisked Version
  function magicallyDisplay(text) {
    let magicText = ""

    for (let i = 0; i < text.length; i++) {
      if (specialCharacters.includes(text[i])){
        magicText += text[i]
      } else {
        magicText += "*"
      }
    }

      return magicText
    }

    // Updates the currently selected Text
    const handleSelect = () => {
      const textarea = document.getElementById('magic-area')
      const [cursorStart, cursorEnd] = [textarea.selectionStart, textarea.selectionEnd]
      
      setCursorPosition({'start': cursorStart, 'end': cursorEnd})
      setSelectedText(text.substring(cursorStart, cursorEnd))
    }

  const handleChange = (event) => {
    let leftString, rightString = ['', '']

    switch (event.nativeEvent.inputType) {
      case eventTypes.insertChar:
        [leftString, rightString] = [text.substring(0, cursorPosition.start), text.substring(cursorPosition.end, text.length)]
        let insertedCharacter = event.nativeEvent.data
        setText(leftString + insertedCharacter + rightString)
        break
      case eventTypes.deleteChar:
        if (selectedText) {
          leftString = text.substring(0, cursorPosition.start)
          rightString = text.substring(cursorPosition.end, text.length)
          setText(leftString + rightString)
        } else {
          leftString = text.substring(0, cursorPosition.start - 1)
          rightString = text.substring(cursorPosition.end, text.length)
          setText(leftString + rightString)
        }
        break
      case eventTypes.deleteLine:
        // !! Needs to be implemented
        break
      case eventTypes.insertLine:
        [leftString, rightString] = [text.substring(0, cursorPosition.start), text.substring(cursorPosition.end, text.length)]
        setText(leftString + "\n" + rightString)
        break
    }
  }

  const handleCut = () => {
    navigator.clipboard
      .writeText(selectedText)
      .then(() => {
        let [leftString, rightString] = [text.substring(0, cursorPosition.start), text.substring(cursorPosition.end, text.length)]
        setText(leftString + rightString)
      })
  }

  const handlePaste = () => {
    let leftString = text.substring(0, cursorPosition.start)
    let rightString = text.substring(cursorPosition.end, text.length)
    
    navigator.clipboard
    .readText()
    .then((data) => {
      let additionalText = data
      setText(leftString + additionalText + rightString)
    })
  }

    if (mode === modes.edit) {
      return (
        <textarea
          className="magic-area"
          id='magic-area'
          onInput={handleChange}
          onCut={handleCut}
          onPaste={handlePaste}
          style={{'fontStyle': textStyles.fontStyle, 
                  'fontWeight': textStyles.fontWeight, 
                  'textDecoration': textStyles.textDecoration }}
          onSelect={handleSelect}
          value={text} 
        />
      )
    } else if (mode === modes.write) {
      return (
        <textarea
          className="magic-area"
          id='magic-area'
          onChange={handleChange}
          value={magicallyDisplay(text)} 
          onSelect={handleSelect}
        />
      )
    } 
}