import { modes, specialCharacters, eventTypes } from '../constants'

import { useState, useEffect } from 'react'



export default function TextArea(props) {
    const [text, setText] = useState(localStorage.getItem('text') || 'This is where you start your journey!')

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
            default:
                console.log('Another event is being detected')
                console.log(event)
        }
    }

    if (props.mode === modes.edit) {
        return (
            <textarea 
                className="magic-area"
                onChange={handleChange}
                style={{'fontStyle': props.textStyles.fontStyle, 
                        'fontWeight': props.textStyles.fontWeight, 
                        'textDecoration': props.textStyles.textDecoration }}
                value={text} 
            />
        )
    } else if (props.mode === modes.write) {
        return (
            <textarea 
                className="magic-area"
                onChange={handleChange}
                value={magicallyDisplay(text)} 
            />
        )
    } 
}