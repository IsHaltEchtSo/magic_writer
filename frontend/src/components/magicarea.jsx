import { specialCharacters, eventTypes, modes } from '../constants'

import { useState, useEffect } from 'react'



export default function MagicArea() {
    const [text, setText] = useState(localStorage.getItem('text') || 'This is where you start your journey!')

    const [mode, setMode] = useState(localStorage.getItem('mode') || modes.write)

    // Update the LocalStorage when the 'text'-State changes
    useEffect(() => {
        localStorage.setItem('text', text)
    }, [text])

    useEffect(() => {
        localStorage.setItem('mode', mode)
    }, [mode])

    const handleClick = () => {
        if (mode === modes.edit) {
            setMode(modes.write)
        } else {
            setMode(modes.edit)
        }
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

    if (mode === modes.write) {
        return (
            <>
                <textarea 
                    className="magicArea"
                    onChange={handleChange}
                    value={magicallyDisplay(text)} 
                    />
                <button onClick={handleClick}>Toggle</button>
            </>
        )
    } else if (mode === modes.edit) {
        console.log(text)
        return (
            <>
                <textarea 
                    className="magicArea"
                    onChange={handleChange}
                    value={text} 
                    />
                <button onClick={handleClick}>Toggle</button>
            </>
        )
    }
}