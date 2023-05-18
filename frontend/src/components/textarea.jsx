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
        switch (event.nativeEvent.inputType) {
            case eventTypes.insertChar:
                setText(text.concat(event.target.value[event.target.value.length - 1]))
                break
            case eventTypes.deleteChar:
                setText(text.substring(0, event.target.value.length))
                break
            case eventTypes.deleteLine:
                setText(text.substring(0, event.target.value.length))
                break
            case eventTypes.insertLine:
                setText(text.concat(event.target.value[event.target.value.length - 1]))
                break
            // default:
            //     console.log('Another event is being detected')
            //     console.log(event)
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
      let additionalText = ''
        navigator.clipboard
          .readText()
          .then((data) => {
            additionalText = data
            setText(text.concat(additionalText))
          })
    }

    if (mode === modes.edit) {
        return (
            <textarea 
                className="magic-area"
                id='magic-area'
                onChange={handleChange}
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
            />
        )
    } 
}